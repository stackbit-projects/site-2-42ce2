import Link from 'next/link';
import Logo from './svgs/logo';
import ReactMarkdown from 'react-markdown';


export default function Footer(props) {
  const companyName = props.siteConfig.companyName;
  return (
    <div className="px-4 pt-32 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      
      <div className="flex text-center justify-center pt-5 pb-10 border-t lg:flex-row">
        <p className="text-sm text-gray-600 justify-center">© Copyright 2021 Contentful. All rights reserved.</p>
      </div>
    </div>
  );
}
