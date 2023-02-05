import config from '~/config';

// Layouts
import { HeaderOnly } from '~/layouts';

// Pages
import Home from '~/pages/Home';
import Beauty from '~/pages/Beauty';
import Cartoon from '~/pages/Cartoon';
import Recent from '~/pages/Recent';
import Favourites from '~/pages/Favourites';
import Saved from '~/pages/Saved';

import Profile from '~/pages/Profile';
import Setting from '~/pages/Setting';
import Upload from '~/pages/Logout';
import Search from '~/pages/Search';
import Program from '~/pages/Program';
import Logout from '~/pages/Logout';

// Public routes
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.program, component: Program },
    { path: config.routes.beauty, component: Beauty },
    { path: config.routes.cartoon, component: Cartoon },
    { path: config.routes.live, component: Saved },
    //
    { path: config.routes.recent, component: Recent },
    { path: config.routes.favourites, component: Favourites },
    { path: config.routes.saved, component: Saved },
    { path: config.routes.mine, component: Recent },
    //
    { path: config.routes.profile, component: Profile },
    { path: config.routes.setting, component: Setting },
    { path: config.routes.upload, component: Upload, layout: HeaderOnly },
    { path: config.routes.search, component: Search, layout: null },
    { path: config.routes.logout, component: Logout, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
