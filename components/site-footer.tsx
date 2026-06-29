export default function SiteFooter() {
  return (
    <footer className="mx-auto w-full max-w-[1400px] px-6 pb-10">
      <div className="flex flex-col gap-3 border-t border-neutral-200 pt-6 text-sm font-medium text-neutral-500 sm:flex-row sm:items-center sm:justify-between">
        <div className="text-neutral-900">DevJoe</div>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
          <p>© {new Date().getFullYear()} DevJoe. All rights reserved.</p>
          <a
            href="https://www.linkedin.com/in/josephharwood-3/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-neutral-900"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
