import React from 'react';
import Link from 'next/link';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GithubIcon from '@mui/icons-material/GitHub';
export default function Footer() {
  return (
    <footer className="bg-black py-8 text-white rounded-t-4xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div>
            <h6 className="text-lg font-semibold mb-4">About Us</h6>
            <p className="text-sm text-gray-400">
            As an official student chapter of ACM SIGKDD (Special Interest Group on Knowledge Discovery in Data), we are committed to fostering a culture of innovation, learning, and collaboration in the field of data science and data related fields.
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
              <a href="https://github.com/ACM-SIGKDD-SRM-KTR-STUDENT-CHAPTER" className="text-gray-400 hover:text-white">
                <GithubIcon fontSize="large" />
              </a>
              <a href="https://twitter.com/srmsigkdd" className="text-gray-400 hover:text-white">
                <TwitterIcon fontSize="large" />
              </a>
              <a href="https://www.instagram.com/srmsigkdd" className="text-gray-400 hover:text-white">
                <InstagramIcon fontSize="large" />
              </a>
              <a href="https://www.linkedin.com/company/acmsigkddsrm" className="text-gray-400 hover:text-white">
                <LinkedInIcon fontSize="large" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-400 font-semibold">
            © {new Date().getFullYear()} <Link href="https://srmsigkdd.vercel.app/" className='underline underline-offset-4'>SRMIST ACM SIGKDD STUDENT CHAPTER</Link>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
