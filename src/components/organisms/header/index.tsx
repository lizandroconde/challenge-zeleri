import { Navbar, Button, Link, Text } from "@nextui-org/react";
export const Header = () => {
  return (
    <Navbar isCompact isBordered variant="sticky" css={{background:"white"}} >
        <Navbar.Brand>
          <Text b color="inherit" hideIn="xs">
            <Link href="/">
            Zeleri Challenge
            </Link>
          </Text>
        </Navbar.Brand>
      </Navbar>
  )
};
