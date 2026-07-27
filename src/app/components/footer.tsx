export default function Footer() {
  return (
    <footer className="w-full py-6 px-6">
      <p className="text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Tamdev. All rights reserved.
      </p>
    </footer>
  );
}