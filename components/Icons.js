import React from 'react';
import Icon from 'react-icons-kit';
import { basic_mail } from 'react-icons-kit/linea/basic_mail';

import { basic_magic_mouse } from 'react-icons-kit/linea/basic_magic_mouse';
import { basic_pencil_ruler } from 'react-icons-kit/linea/basic_pencil_ruler';
import { basic_cards_diamonds } from 'react-icons-kit/linea/basic_cards_diamonds';
import { basic_laptop } from 'react-icons-kit/linea/basic_laptop';
import { basic_map } from 'react-icons-kit/linea/basic_map';
import { basic_paperplane } from 'react-icons-kit/linea/basic_paperplane';
import { basic_smartphone } from 'react-icons-kit/linea/basic_smartphone';
import { arrows_slim_right } from 'react-icons-kit/linea/arrows_slim_right';

export const MagicMouseIcon = () => (
  <div style={{ color: 'gray' }}>
    <Icon size={44} icon={basic_magic_mouse} />
  </div>
);

export const MailIcon = () => (
  <div style={{ color: 'white' }}>
    <Icon size={20} icon={basic_mail} />
  </div>
);

export const ProgrammingIcon = () => (
  <div style={{ color: 'gray' }}>
    <Icon size={64} icon={basic_pencil_ruler} />
  </div>
);
export const FrameworksIcon = () => (
  <div style={{ color: 'gray' }}>
    <Icon size={64} icon={basic_cards_diamonds} />
  </div>
);
export const ContentCreationIcon = () => (
  <div style={{ color: 'gray' }}>
    <Icon size={64} icon={basic_laptop} />
  </div>
);
export const AddressMapIcon = () => (
  <div style={{ color: 'gray' }}>
    <Icon size={64} icon={basic_map} />
  </div>
);
export const AddressMailIcon = () => (
  <div style={{ color: 'gray' }}>
    <Icon size={64} icon={basic_paperplane} />
  </div>
);
export const AddressPhoneIcon = () => (
  <div style={{ color: 'gray' }}>
    <Icon size={64} icon={basic_smartphone} />
  </div>
);
export const MoreDetailsIcon = () => (
  /* change icon color on hover to white */

  <div style={{ color: 'gray' }}>
    <Icon size={27} icon={arrows_slim_right} />
  </div>
);
