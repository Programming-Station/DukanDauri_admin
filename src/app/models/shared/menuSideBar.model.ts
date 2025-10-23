export interface MenuItem {
  id: string;
  title: string;
  icon: string;
  route: string;
  children?: MenuItem[];
  isActive?: boolean;
  hasPermission?: boolean;
}

export interface MenuSection {
  title: string;
  items: MenuItem[];
}
