import { LoginPage } from '../pages/LoginPage';
import { ElectronicsPage } from '../pages/ElectronicsPage';
import { ApparelAndShoesPage } from '../pages/ApparelAndShoesPage';

export const pages = {
login: new LoginPage(),
electronics: new ElectronicsPage(),
apparelAndShoes: new ApparelAndShoesPage()
};