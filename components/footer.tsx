"use client";

export default function Footer() {
  return (
    <footer className="border-t border-border px-6 py-24">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between gap-12">
        {/* Links */}
        <div className="space-y-3">
          <a
            href="mailto:joeharwooddev@gmail.com"
            className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/josephharwood-3/"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/joeharwood96"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            GitHub
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Joe Harwood. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
