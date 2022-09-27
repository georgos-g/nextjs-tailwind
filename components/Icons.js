import React from 'react';
import Icon from 'react-icons-kit';
import { basic_magic_mouse } from 'react-icons-kit/linea/basic_magic_mouse';
// import { facebookSquare } from 'react-icons-kit/fa/facebookSquare';
// import { githubSquare } from 'react-icons-kit/fa/githubSquare';
// import { linkedinSquare } from 'react-icons-kit/fa/linkedinSquare';
import { basic_mail } from 'react-icons-kit/linea/basic_mail';

export const MagicMouseIcon = () => (
  <div style={{ color: 'gray' }}>
    <Icon size={44} icon={basic_magic_mouse} />
  </div>
);
// export const FacebookIcon = () => (
//   <div style={{ color: 'gray' }}>
//     <Icon size={44} icon={facebookSquare} />
//   </div>
// );
// export const GithubIcon = () => (
//   <div style={{ color: 'gray' }}>
//     <Icon size={44} icon={githubSquare} />
//   </div>
// );
// export const LinkedinIcon = () => (
//   <div style={{ color: 'gray' }}>
//     <Icon size={44} icon={linkedinSquare} />
//   </div>
// );
export const MailIcon = () => (
  <div style={{ color: 'white' }}>
    <Icon size={20} icon={basic_mail} />
  </div>
);
