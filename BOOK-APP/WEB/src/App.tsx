import { Grid, GridItem,Show } from "@chakra-ui/react"
import NavBar from "./components/NavBar"
import { BookGrid } from "./components/BookGrid";



function App() {
  return (<Grid templateAreas={{
    base: `"nav" " aside"`,
    lg: `"nav nav" "aside main"`
  }}>
    <GridItem area="nav">
      <NavBar />
    </GridItem>
    <GridItem area="aside">aside</GridItem>
    <Show above="lg">
      <GridItem area="main"><BookGrid/></GridItem>
    </Show>
      
  </Grid>
  );
}

export default App