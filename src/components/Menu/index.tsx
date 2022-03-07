import React from 'react'
import { RouteType } from '../../routes'
import { MenuList, MenuItem, ListItemIcon, ListItemText } from '@mui/material';



interface Props {
  links: RouteType[];
  manuClickHandler: (link: string) => void;
}

export const Menu: React.FC<Props> = ({links, manuClickHandler}): JSX.Element => {
  

  return <div>
    <MenuList>
      {links?.map((link) => (
        <MenuItem key={link.path} onClick={() => manuClickHandler(link.path)}>
          <ListItemIcon>{<link.icon fontSize="small" />}</ListItemIcon>
          <ListItemText>{link.label}</ListItemText>
        </MenuItem>
      ))}
    </MenuList>
  </div>
}
