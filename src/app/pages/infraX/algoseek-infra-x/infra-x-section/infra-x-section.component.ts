import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgParticlesModule } from 'ng-particles';
import { loadSlim } from "tsparticles-slim";
import { NgParticlesService, NgxParticlesModule } from "@tsparticles/angular";
import { Container, MoveDirection, OutMode } from '@tsparticles/engine';

@Component({
  selector: 'app-infra-x-section',
  standalone: true,
  imports: [CommonModule, NgxParticlesModule],
  templateUrl: './infra-x-section.component.html',
  styleUrls: ['./infra-x-section.component.scss'],
})
export class InfraXSectionComponent {
  id = "tsparticles";

  /* Starting from 1.19.0 you can use a remote url (AJAX request) to a JSON with the configuration */
  particlesUrl = "http://foo.bar/particles.json";

  /* or the classic JavaScript object */
  particlesOptions = {
      background: {
          color: {
              value: "#0d47a1",
          },
      },
      fpsLimit: 120,
      interactivity: {
          modes: {
              push: {
                  quantity: 4,
              },
              repulse: {
                  distance: 200,
                  duration: 0.4,
              },
          },
      },
      particles: {
          color: {
              value: "#ffffff",
          },
          links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
          },
          move: {
              direction: MoveDirection.none,
              enable: true,
              outModes: {
                  default: OutMode.bounce,
              },
              random: false,
              speed: 6,
              straight: false,
          },
          number: {
              density: {
                  enable: true,
                  area: 800,
              },
              value: 80,
          },
          opacity: {
              value: 0.5,
          },
          shape: {
              type: "circle",
          },
          size: {
              value: { min: 1, max: 5 },
          },
      },
      detectRetina: true,
  };

  constructor(private readonly ngParticlesService: NgParticlesService) {}

  ngOnInit(): void {
      this.ngParticlesService.init(async (engine: any) => {
          console.log(engine);

          // Starting from 1.19.0 you can add custom presets or shape here, using the current tsParticles instance (main)
          // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
          // starting from v2 you can add only the features you need reducing the bundle size
          //await loadFull(engine);
          await loadSlim(engine);
      });
  }

  particlesLoaded(container: Container): void {
      console.log(container);
  }
}
