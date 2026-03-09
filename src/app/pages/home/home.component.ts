import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  typedText = '';
  fullText = `> Initialize Backend Services...
> Deploying Microservices...
> Nishu Kumari online.`;

  tags = [
    "Backend Engineer",
    "Ex-Flipkart",
    "Microservices",
    "Java",
    "Spring Boot",
    "Distributed Systems",
    "DevOps",
    "GCP"
  ];

  skills = [
    {
      title: "Backend & Languages",
      skills:["Java","Spring Boot","Node.js","Express","Thymeleaf","C (Intro)"]
    },
    {
      title:"DevOps & Cloud",
      skills:["Docker","Kubernetes","CI/CD","Linux Commands","Shell Scripting"]
    },
    {
      title:"Architecture & Tools",
      skills:["Microservices","Distributed Systems","Serverless","REST APIs","WebSocket","MongoDB","Agile & Scrum"]
    }
  ];

  projects = [
    {
        title: "AI Fitness Recommendation Platform",
        description: "A full-stack fitness tracking and recommendation system that generates personalized workout plans using AI. Built with Spring Boot microservices, React frontend, and integrates Gemini API for intelligent recommendations.",
        tech: ["Spring Boot", "React", "PostgreSQL", "MongoDB", "Spring Cloud", "Gemini API"],
        github: "https://github.com/sun-shine-57/fitness-microservice"
    },
    {
        title: "Realtime Chat Application",
        description: "A realtime messaging application supporting instant message delivery using WebSockets.",
        tech: ["Spring Boot", "WebSocket", "Thymeleaf"],
        github: "https://github.com/sun-shine-57/realtime-chat-app"
    }
    ];


  ngOnInit() {
    let i = 0;

    const timer = setInterval(() => {
      this.typedText = this.fullText.slice(0, i);
      i++;

      if (i > this.fullText.length) {
        clearInterval(timer);
      }
    }, 40);
  }
}