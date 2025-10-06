import React from 'react';
import "./footer.css";
import { Instagram } from 'lucide-react';
import { Facebook } from 'lucide-react';
import { Twitter } from 'lucide-react';

import { Linkedin } from 'lucide-react';

const FixFooter = () => {
  return (
    <div className='fix-footer'>
        <div>
            <h1>WorkLinker</h1>
            <p>
                WorkLinker is a platform that connects job seekers with job opportunities.
                It is a one-stop solution for job seekers to find their dream job and employers to find the best talent.

            </p>
            <div className='media-container'>
                        <Instagram  className='p-2 border border-white rounded-2xl' size={"36"}/>
                        <Facebook className='p-2'/>
                        <Twitter  className='p-2' />
                        <Linkedin className='p-2' />

            </div>
        </div>
      
    </div>
  )
}

export default FixFooter
