import { Switch, Route } from 'react-router-dom';
import Products from 'pages/Products';

export default function Router() {
  return (
    <Switch>
      <Route path="/" component={Products} />
    </Switch>
  );
}
