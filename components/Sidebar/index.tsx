import { Container } from './styles';

interface SidebarProps {
  isOpen?: boolean;
}

function Sidebar({ isOpen = false }: SidebarProps) {
 

  return (
      <Container isOpen={isOpen}>
        <h1>Sidebar</h1>
      </Container>
  );
};

export default Sidebar;
