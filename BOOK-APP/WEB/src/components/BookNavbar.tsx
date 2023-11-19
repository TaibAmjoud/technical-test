import { HStack, Image, Text } from "@chakra-ui/react";
import { SearchInput } from "./SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}

const BookNavbar = () => {
  return (
    <HStack borderTopRadius={"30px"} boxShadow={"dark-lg"} padding="35px">
      <SearchInput />
    </HStack>
  );
};

export default BookNavbar;
