import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Signin from './pages/Signin';
import SignUp from './pages/SignUp';

export default createAppContainer(createSwitchNavigator({ Signin, SignUp }));
