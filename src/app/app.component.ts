import { Component } from '@angular/core';
import { HeaderComponent } from "./components/header/header.component";
import { AlgoseekHomeComponent } from "./pages/home/algoseek-home/algoseek-home.component";
import { FooterComponent } from "./components/footer/footer.component";
import { AlgoseekInfraXComponent } from "./pages/infraX/algoseek-infra-x/algoseek-infra-x.component";
import { HeaderDarkComponent } from "./components/header-dark/header-dark.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ FooterComponent, AlgoseekInfraXComponent, HeaderDarkComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'algoseek_web';
}
