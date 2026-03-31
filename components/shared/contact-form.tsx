"use client"

import Image from "next/image"

export function ContactForm() {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <section id="contact" className="py-12 lg:py-16">
      <div className="mx-auto max-w-4xl px-4 lg:px-8">
        <form onSubmit={handleSubmit} className="rounded-lg bg-background p-8 shadow-sm">
          {/* Product/Issue Name */}
          <div className="mb-8">
            <label className="mb-2 block text-sm font-medium text-foreground">
              产品名称/问题名称 <span className="text-primary">*</span>
            </label>
            <input
              type="text"
              placeholder="请输入产品名称/问题名称"
              className="w-full rounded-md border border-border bg-muted px-4 py-3 text-foreground placeholder:text-foreground/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              required
            />
          </div>

          {/* Service Type Radio Options */}
          <div className="mb-8">
            <label className="mb-3 block text-sm font-medium text-foreground">
              请选择服务类型 <span className="text-primary">*</span>
            </label>
            <div className="flex flex-wrap gap-6">
              {[
                { value: "consultation", label: "产品咨询" },
                { value: "maintenance", label: "售后维护" },
                { value: "feedback", label: "投诉建议" },
                { value: "trial", label: "申请试用版" },
                { value: "certification", label: "兼容认证" },
              ].map((option) => (
                <label key={option.value} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="serviceType"
                    value={option.value}
                    className="h-4 w-4 text-primary"
                    required
                  />
                  <span className="text-sm text-foreground">{option.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Issue Content */}
          <div className="mb-8">
            <label className="mb-2 block text-sm font-medium text-foreground">
              请详细填写问题内容 <span className="text-primary">*</span>
            </label>
            <textarea
              rows={6}
              placeholder="请详细填写问题内容"
              className="w-full rounded-md border border-border bg-muted px-4 py-3 text-foreground placeholder:text-foreground/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              required
            />
          </div>

          {/* User Information */}
          <div className="mb-8 space-y-6">
            <div>
              <label className="mb-2 block text-sm font-medium text-foreground">
                您的姓名 <span className="text-primary">*</span>
              </label>
              <input
                type="text"
                placeholder="请输入您的姓名"
                className="w-full rounded-md border border-border bg-muted px-4 py-3 text-foreground placeholder:text-foreground/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                required
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-foreground">
                您的公司/单位 <span className="text-primary">*</span>
              </label>
              <input
                type="text"
                placeholder="请输入您的公司/单位名称"
                className="w-full rounded-md border border-border bg-muted px-4 py-3 text-foreground placeholder:text-foreground/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                required
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-foreground">
                您的电话 <span className="text-primary">*</span>
              </label>
              <input
                type="tel"
                placeholder="请输入您的电话"
                className="w-full rounded-md border border-border bg-muted px-4 py-3 text-foreground placeholder:text-foreground/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                required
              />
            </div>
          </div>

          {/* Captcha */}
          {/* <div className="mb-8">
            <label className="mb-2 block text-sm font-medium text-foreground">
              验证码 <span className="text-primary">*</span>
            </label>
            <div className="flex gap-3 items-center">
              <div className="flex-1 rounded-md border border-border bg-muted px-4 py-3">
                <input
                  type="text"
                  placeholder="验证码"
                  className="w-full bg-transparent text-foreground placeholder:text-foreground/50 focus:outline-none"
                  required
                />
              </div>
              <div className="h-12 w-24 rounded-md border border-border bg-muted flex items-center justify-center">
                <Image
                  src="/images/banners/contact-form.png"
                  alt="验证码"
                  width={80}
                  height={40}
                  className="h-full w-full object-cover rounded"
                />
              </div>
              <button
                type="button"
                className="text-xs text-primary hover:underline whitespace-nowrap"
              >
                看不清，换一张
              </button>
            </div>
          </div> */}

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="rounded-md bg-primary px-12 py-3 font-medium text-primary-foreground transition-all duration-200 hover:bg-primary/90 active:scale-95"
            >
              确认提交
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
