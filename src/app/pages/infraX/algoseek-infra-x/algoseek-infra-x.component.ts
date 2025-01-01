import { Component } from '@angular/core';
import { InfraXSectionComponent } from "./infra-x-section/infra-x-section.component";
import { InfraXIntroductionComponent } from "./infra-x-introduction/infra-x-introduction.component";
import { HeaderDarkComponent } from "../../../components/header-dark/header-dark.component";

@Component({
  selector: 'app-algoseek-infra-x',
  standalone: true,
  imports: [InfraXSectionComponent, InfraXIntroductionComponent, HeaderDarkComponent],
  templateUrl: './algoseek-infra-x.component.html',
  styleUrl: './algoseek-infra-x.component.scss'
})
export class AlgoseekInfraXComponent {

}
