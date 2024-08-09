import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GithubIcon from '@mui/icons-material/GitHub';
export default function Footer() {
  return (
    <footer className="bg-black py-8 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div>
            <h6 className="text-lg font-semibold mb-4">About Us</h6>
            <p className="text-sm text-gray-400">
              Blog website
            </p>
          </div>
          <div>
            <h6 className="text-lg font-semibold mb-4">Quick Links</h6>
            <ul>
              <li className="mb-2">
                <a href="/" className="text-sm text-gray-400 hover:text-white">Home</a>
              </li>
              <li className="mb-2">
                <a href="/about" className="text-sm text-gray-400 hover:text-white">About</a>
              </li>
              <li className="mb-2">
                <a href="/contact" className="text-sm text-gray-400 hover:text-white">Contact</a>
              </li>
              <li className="mb-2">
                <a href="/privacy" className="text-sm text-gray-400 hover:text-white">Privacy Policy</a>
              </li>
            </ul>
          </div>
          <div>
            <h6 className="text-lg font-semibold mb-4">Follow Us</h6>
            <div className="flex space-x-4">
              <a href="https://github.com" className="text-gray-400 hover:text-white">
                <GithubIcon fontSize="large" />
              </a>
              <a href="https://twitter.com" className="text-gray-400 hover:text-white">
                <TwitterIcon fontSize="large" />
              </a>
              <a href="https://instagram.com" className="text-gray-400 hover:text-white">
                <InstagramIcon fontSize="large" />
              </a>
              <a href="https://linkedin.com" className="text-gray-400 hover:text-white">
                <LinkedInIcon fontSize="large" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Your Blog Name. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
