import { Box, Grid, Show, GridItem, Flex } from "@chakra-ui/react";
import GameGrid from "../components/GameGrid";
import GameHeading from "../components/GameHeading";
import GenreList from "../components/GenreList";
import PlatformSelector from "../components/PlatformSelector";
import SortSelector from "../components/SortSelector";

const HomePage = () => {
  return (
    <Grid
      templateAreas={{
        base: `"main"`,
        lg: `"aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList
          // selectedGenreId={gameQuery.genreId}
          // onSelectGenre={(genre) =>
          //   setGameQuery({ ...gameQuery, genreId: genre.id })
          // }
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box paddingLeft={2}>
          <GameHeading />
          <Flex marginBottom={5}>
            <Box margin={5}>
              <PlatformSelector
              // selectedPlatformId={gameQuery.platformId}
              // onSelectPlatform={(platform) =>
              //   setGameQuery({ ...gameQuery, platformId: platform.id })
              // }
              />
              <SortSelector
              // sortOrder={gameQuery.sortOrder}
              // onSelectSortOrder={(sortOrder) =>
              //   setGameQuery({ ...gameQuery, sortOrder })
              // }
              />
            </Box>
          </Flex>
        </Box>
        <GameGrid />
      </GridItem>
    </Grid>
  );
};

export default HomePage;
