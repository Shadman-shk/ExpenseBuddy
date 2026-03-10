import React from 'react'

function Hero() {
  return (
    <div>
      <section class="bg-white lg:grid lg:h-screen lg:place-content-center">
  <div class="mx-auto w-screen max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
    <div class="mx-auto max-w-prose text-center">
      <h1 class="text-4xl font-bold text-gray-900 sm:text-5xl">
        <strong class="text-indigo-600">Welcome to Expense Buddy</strong> 
      </h1>

      <p class="mt-4 text-base text-pretty text-gray-700 sm:text-lg/relaxed">
        Welcome to Expense Buddy. All your personal expenses are managed here.
      </p>

      <div class="mt-4 flex justify-center gap-4 sm:mt-6">
        <a class="inline-block rounded border border-indigo-600 bg-indigo-600 px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-indigo-700" href="#">
          Get Started
        </a>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Hero
