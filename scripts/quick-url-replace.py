#!/usr/bin/env python3
"""批量替换所有源代码中的外部URL为本地路径"""

import os
import re
from pathlib import Path

# 完整的URL映射表
URL_MAPPING = {
    # 客户LOGO (33个)
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E5%9B%BD%E5%AE%B6%E5%BC%80%E5%8F%91%E9%93%B6%E8%A1%8C-QJdfdGZNIsnDisTWkbWsVwA0twOW0N.png": "/images/customers/ndb.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E5%B9%B3%E5%AE%89%E7%A7%91%E6%8A%80-xP9pkTi2BHHS4KVnGmteqwog1u0Lf8.webp": "/images/customers/pingan-tech.webp",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E5%9B%BD%E5%AE%B6%E5%BC%80%E5%8F%91%E6%8A%95%E8%B5%84%E9%9B%86%E5%9B%A2%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8-iWXxncUuKsQMZ5r5NtBexjmXCGu4xM.png": "/images/customers/cidg.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E4%B8%9C%E9%A3%8E%E6%B1%BD%E8%BD%A6%E9%9B%86%E5%9B%A2%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8-YuEYHQEzCVX3UayJstXwuHPG6Lbn7l.png": "/images/customers/dongfeng.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E6%B0%B8%E8%AF%9A%E4%BF%9D%E9%99%A9-3Klfelanu55QyaM7DcSXK4JZNQeP8R.png": "/images/customers/yongcheng.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E5%B1%B1%E4%B8%9C%E8%83%BD%E6%BA%90%E9%9B%86%E5%9B%A2.jpg-fj8aRQ0JNf9smG4X1kKhhPbWePsQLA.png": "/images/customers/shandong-energy.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E5%B1%B1%E4%B8%9C%E9%BB%84%E9%87%91%E9%9B%86%E5%9B%A2-F735TVhIShdkZ0Cm1299UwfIHRf7kH.jpg": "/images/customers/shandong-gold.jpg",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E5%B7%A5%E5%95%86%E9%93%B6%E8%A1%8C-DCJSc5WeEczMx25juDBvln6gKpzbiQ.png": "/images/customers/icbc.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E6%8B%9B%E5%95%86%E9%93%B6%E8%A1%8C-QspcDnw5FdfYdPpWteNWEPJ1AsRulx.png": "/images/customers/cmbchina.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E6%8B%9B%E5%95%86%E5%B1%80%E9%9B%86%E5%9B%A2%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8-Xs5BU1S5TdTp8QTucenxvetH9oubTs.png": "/images/customers/coc.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E6%B5%AA%E6%BD%AE-5p5acCjUSHCcOu6IM16b2dbYJDs8ix.png": "/images/customers/inspur.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E6%B9%96%E5%8D%97%E9%93%B6%E8%A1%8C%EF%BC%88%E5%8D%8E%E8%9E%8D%E6%B9%98%E6%B1%9F%E9%93%B6%E8%A1%8C%E6%9B%B4%E5%90%8D%EF%BC%89-aXpKMwJ8E7wGlGT2Kf4mVXXDJqFHb5.png": "/images/customers/hunan-bank.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E5%9B%BD%E6%8A%95%E8%B4%A2%E5%8A%A1%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8-Ewio7H5oodUBAVp2ae6JZeaqc4cDON.png": "/images/customers/guotou-finance.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E5%B9%BF%E5%B7%9E%E5%86%9C%E5%95%86%E8%A1%8C-JCredxRnJvGmvs5fONWkhh0SY5za16.png": "/images/customers/gzrcb.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E5%B9%BF%E5%8F%91%E9%93%B6%E8%A1%8C-waESbZ4nDJqbQyO61QcLm5lAzmwpsJ.png": "/images/customers/cib.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E5%85%B4%E4%B8%9A%E9%93%B6%E8%A1%8C-7czOLZOZ1OhoWy7r3cjVQGKAewJJxs.png": "/images/customers/cib-xingye.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E4%B8%AD%E5%9B%BD%E5%85%B5%E5%99%A8%E5%B7%A5%E4%B8%9A%E9%9B%86%E5%9B%A2%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8-keXrfASMCnX1ANixeSVchG13T3EYel.jpg": "/images/customers/norinco.jpg",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E9%BD%90%E9%B2%81%E9%93%B6%E8%A1%8C-xjfWBrVO1q3T7ql2sz4JMd3QoMYBfV.png": "/images/customers/qilu-bank.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E5%9B%BD%E5%AE%B6%E7%94%B5%E6%8A%95-ZVKZkpJmECVjdDeKihsHTodHBEbsJg.png": "/images/customers/spic.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E4%B8%AD%E5%9B%BD%E4%BF%A1%E6%81%AF%E9%80%9A%E4%BF%A1%E7%A7%91%E6%8A%80%E9%9B%86%E5%9B%A2%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8.jpg-4Y4xZHIS8pFRt18UYlacIiCLwBITQo.png": "/images/customers/chitc.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E4%B8%AD%E5%9B%BD%E7%94%B5%E6%B0%94%E8%A3%85%E5%A4%87%E9%9B%86%E5%9B%A2%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8-tKd5Ty5mMBjhhFyU9nt8vCwVmT35SX.png": "/images/customers/ceeg.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E4%B8%AD%E5%9B%BD%E9%93%9D%E4%B8%9A%E9%9B%86%E5%9B%A2%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8-VBwypVt2TTc1HGPmhblVS6FBgg2jGs.png": "/images/customers/chinalco.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E4%B8%AD%E5%9B%BD%E8%91%9B%E6%B4%B2%E5%9D%9D%E9%9B%86%E5%9B%A2%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8-pYL8znWzTcXGRbYQGWptx4n2dRmFNP.png": "/images/customers/ctgc.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E4%B8%AD%E5%9B%BD%E8%88%AA%E7%A9%BA%E6%B2%B9%E6%96%99%E9%9B%86%E5%9B%A2%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8%EF%BC%88%E4%B8%AD%E5%9B%BD%E8%88%AA%E6%B2%B9%EF%BC%89-AEG1GEPRngqRo44ooIrvrZ5ktPKtCv.png": "/images/customers/caog.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E4%B8%AD%E6%B3%B0%E8%AF%81%E5%88%B8-TXFFc92YbGsJhixZuhADLEpPJaRZIX.png": "/images/customers/citic-securities.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E4%B8%AD%E5%9B%BD%E4%BA%BA%E6%B0%91%E9%93%B6%E8%A1%8C-lMLUgET4ZhUuLZFm5aWya7xHsPgaMD.webp": "/images/customers/pbc.webp",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E4%B8%AD%E5%9B%BD%E5%86%9C%E4%B8%9A%E9%93%B6%E8%A1%8C-0sJWIXSHG0Ag97EEpWdI0staLk0Pno.png": "/images/customers/abc.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E4%B8%AD%E5%9B%BD%E6%B0%91%E7%94%9F%E9%93%B6%E8%A1%8C-k8kwdDc0lHpq1fmlqhMfcL1UtrIowv.png": "/images/customers/cmbc.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E4%B8%AD%E5%9B%BD%E9%93%B6%E8%A1%8C-Gv4iL9ZbL9tNabOKdGvSLaDdqpobiN.png": "/images/customers/boc.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E4%B8%AD%E5%9B%BD%E4%B8%AD%E8%BD%A6%E9%9B%86%E5%9B%A2%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8-35c45nZyuHHnJ0cBSba82njkj8XXWa.png": "/images/customers/crc.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E4%B8%AD%E5%9B%BD%E7%94%B5%E5%BB%BA-ZLzO7Fm1YxL5yiMTKoZvIMhbPsy4ty.jpg": "/images/customers/powerchina.jpg",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E4%B8%AD%E5%9B%BD%E5%A4%AA%E5%B9%B3%E4%BF%9D%E9%99%A9-vcLP7XeMjLue1p3iL5ESspQCZdniAO.png": "/images/customers/cptpp.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E4%B8%AD%E5%9B%BD%E4%BA%94%E7%9F%BF%E9%9B%86%E5%9B%A2%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8-c1G5f23dAM32GNcuWsEjGJpfeuMSwv.png": "/images/customers/minmetals.png",
}

def replace_urls_in_file(filepath):
    """在单个文件中替换URL"""
    try:
        content = filepath.read_text(encoding='utf-8')
        original = content
        
        for old_url, new_path in URL_MAPPING.items():
            if old_url in content:
                content = content.replace(old_url, new_path)
        
        if content != original:
            filepath.write_text(content, encoding='utf-8')
            return True
        return False
    except Exception:
        return False

def main():
    """主程序"""
    print("=" * 80)
    print("快速URL替换工具 - 替换所有源代码中的外部URL")
    print("=" * 80)
    
    project_root = Path("/vercel/share/v0-project")
    print(f"\n项目目录: {project_root}\n")
    
    # 手动收集所有源文件
    source_files = []
    for ext in ['tsx', 'ts', 'jsx', 'js']:
        for item in (project_root / "app").rglob(f"*.{ext}"):
            source_files.append(item)
        for item in (project_root / "components").rglob(f"*.{ext}"):
            source_files.append(item)
        for item in (project_root / "lib").rglob(f"*.{ext}"):
            source_files.append(item)
    
    # 排除node_modules和.next
    source_files = [f for f in source_files if 'node_modules' not in f.parts and '.next' not in f.parts]
    
    print(f"扫描到 {len(source_files)} 个源代码文件\n")
    
    files_changed = 0
    total_replaced = 0
    
    for filepath in source_files:
        if replace_urls_in_file(filepath):
            files_changed += 1
            # 计算替换数量
            content = filepath.read_text(encoding='utf-8')
            for old_url in URL_MAPPING.keys():
                if old_url in content:
                    total_replaced += content.count(old_url)
            print(f"  ✓ {filepath.relative_to(project_root)}")
    
    print(f"\n替换完成:")
    print(f"  - 修改文件数: {files_changed} 个")
    
    # 验证是否还有未替换的URL
    print(f"\n验证是否还有外部URL...")
    remaining = 0
    for filepath in source_files:
        try:
            content = filepath.read_text(encoding='utf-8')
            if "hebbkx1anhila5yf.public.blob.vercel-storage.com" in content:
                remaining += 1
                print(f"  ✗ {filepath.relative_to(project_root)} 仍然包含外部URL")
        except Exception:
            pass
    
    if remaining == 0:
        print("✅ 完美! 所有源代码文件中的外部URL已替换\n")
    else:
        print(f"⚠️  还有 {remaining} 个文件包含外部URL\n")

if __name__ == "__main__":
    main()
