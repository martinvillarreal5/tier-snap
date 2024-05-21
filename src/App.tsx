import { ThemeProvider } from './components/ThemeProvider';
import { TierContainer } from './components/TierContainer';

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="container mx-auto flex min-h-screen flex-col pb-24 pt-8">
        <TierContainer />
      </div>
    </ThemeProvider>
  );
}

export default App;
