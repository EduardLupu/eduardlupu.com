import SocialLinks from "./social-links";

export default function Footer() {
  return (
    <footer className="mt-auto space-y-6 py-12 text-center">
      <SocialLinks />
      <p className="text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} eduardlupu.com • all rights reserved.
      </p>
    </footer>
  );
}
