import { AppRouter } from './router/AppRouter';
import { AppTheme } from './theme';


export const MusicRecommenderApp = () => {
  return (
    <>
      <AppTheme>
          <AppRouter />
      </AppTheme>
    </>
  )
}
