export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-100 dark:bg-black py-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              &copy; {currentYear} Shubham Singh Saini. All rights reserved.
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-600 dark:text-gray-400">Made with ❤️ by Shubham</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
