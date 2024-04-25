'use client'

import { Eye, EyeOff } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

import Input from '@/components/input'

export default function SignIn() {
  const [isLogin, setIsLogin] = useState(true)
  const [showPassword, setShowPassword] = useState(false)

  const handleToggle = () => setIsLogin((prevState) => !prevState)
  const handleTogglePassword = () => setShowPassword((prevState) => !prevState)

  return (
    <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-cover bg-fixed bg-center bg-no-repeat">
      <div className="h-full w-full bg-black lg:bg-opacity-50">
        <nav className="px-12 py-5">
          <Image
            src="/images/logo.svg"
            alt="Logo Netflix"
            height={48}
            width={190}
            className="h-11"
          />
        </nav>

        <div className="flex justify-center">
          <div className="mt-2 w-full self-center rounded-md bg-black bg-opacity-70 p-16 transition-all lg:w-2/5 lg:max-w-md">
            <h2 className="mb-8 text-4xl font-bold text-white">Sign in</h2>

            <div className="flex flex-col gap-4">
              {!isLogin && <Input label="Name" />}
              <Input label="Email" type="email" />
              <Input
                label="Password"
                type={showPassword ? 'text' : 'password'}
                icon={
                  <button
                    onClick={handleTogglePassword}
                    className="flex h-7 w-8 items-center justify-center rounded-full outline-none hover:bg-neutral-600"
                  >
                    {showPassword ? (
                      <Eye className="size-5" />
                    ) : (
                      <EyeOff className="size-5" />
                    )}
                  </button>
                }
              />
              <button className="w-full rounded-sm bg-red-700 py-3 font-medium text-white transition hover:bg-red-800">
                {isLogin ? 'Sign In' : 'Sign Up'}
              </button>

              <p className="mt-8 text-neutral-500">
                {isLogin ? 'New to Netflix?' : 'Already have an account?'}{' '}
                <button
                  onClick={handleToggle}
                  className="cursor-pointer font-medium  text-white outline-none hover:underline"
                >
                  {isLogin ? 'Sign up now' : 'Sign in'}
                </button>
                .
              </p>

              <span className="text-xs text-neutral-500">
                {
                  "This page is protected by Google reCAPTCHA to ensure you're not a bot. "
                }
                <span className="cursor-pointer text-blue-500 hover:underline">
                  Learn more
                </span>
                .
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
