
import "./footer.css";
import { Instagram } from 'lucide-react';
import { Facebook } from 'lucide-react';
import { Twitter } from 'lucide-react';

import { Linkedin } from 'lucide-react';
import { Button } from './ui/button';

const FixFooter = () => {
  return (
    <div className='fix-footer'>
      <div className='flex flex-row justify-between'>
        <div>


          <h1>WorkLinker</h1>
          <p>
            WorkLinker is a platform that connects job seekers with job opportunities.
            It is a one-stop solution for job seekers to find their dream job and employers to find the best talent.

          </p>
          <div className='media-container cursor-pointer'>
            <Instagram className="p-1 border-2 border-white rounded-2xl" size={36} />
            <Facebook className="p-1 border-2 border-white rounded-2xl" size={36} />
            <Twitter className="p-1 border-2 border-white rounded-2xl" size={36} />
            <Linkedin className="p-1 border-2 border-white rounded-2xl" size={36} />



          </div>
        </div>
        <div className='flex flex-row gap-4'>
          <div>
            <h1>Quick Links</h1>
            <p>Home</p>
            <p>Jobs</p>
            <p>Companies</p>
            <p>Blog</p>
          </div>
          <div className='flex flex-col gap-4'>


            <Button className='p-2 pb-5 pt-5 text-lg text-white'>Contact Us</Button>
            <p>+91 9999999999</p>
            <p>1Nk0z@example.com</p>
          </div>

        </div>

      </div>
      <div className='line'>

      </div>
      <div className='bottom-info'>
        <div>
          <p>
            @2023 WorkLinker. All Rights Reserved
          </p>
        </div>
        <div id='bottom-links'>
          <p>Terms of Service</p>
          <p>Privacy Policy</p>
          <p>Cookies</p>
          <p>Help Center</p>
        </div>


      </div>


    </div>
  )
}

export default FixFooter
