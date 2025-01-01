import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Container, MoveDirection, OutMode } from '@tsparticles/engine';
import { loadSlim } from '@tsparticles/slim';
import { NgParticlesService, NgxParticlesModule } from '@tsparticles/angular';

@Component({
  selector: 'app-infra-x-section',
  standalone: true,
  imports: [CommonModule, NgxParticlesModule],
  templateUrl: './infra-x-section.component.html',
  styleUrls: ['./infra-x-section.component.scss'],
})
export class InfraXSectionComponent {
  id = 'tsparticles';
  particlesOptions = {
    background: {
      color: {
        value: '#000000',
      },
    },
    fullScreen: {
      enable: false,
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
        value: '#4b4f4b',
      },
      links: {
        color: '#293d37',
        distance: 150,
        enable: true,
        opacity: 1,
        width: 4,
      },
      move: {
        direction: MoveDirection.none,
        enable: true,
        outModes: {
          default: OutMode.bounce,
        },
        random: false,
        speed: 3,
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
        value: 1,
      },
      shape: {
        type: 'circle',
      },
      size: {
        value: { min: 2, max: 10 },
      },
    },
    detectRetina: true,
  };

  constructor(private readonly ngParticlesService: NgParticlesService) {}

  ngOnInit(): void {
    this.ngParticlesService.init(async (engine: any) => {
      console.log(engine);
      await loadSlim(engine);
    });
  }

  particlesLoaded(container: Container): void {
    console.log(container);
  }
}
