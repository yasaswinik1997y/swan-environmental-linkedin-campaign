import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';

interface PollOption {
  label: string;
  votes: number;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],

  template: `
    <div class="page">

      <div class="linkedin-card">

        <!-- Company Header -->
        <div class="company-header">

        <div class="company-logo">
  <img
    src="https://www.swanenviron.com/assets/images/swan-environmental.png"
    alt="Swan Environmental logo"
    class="swan-logo"
  />
</div>

          <div class="company-info">
            <h2>Swan Environmental Private Limited</h2>
            <p>1,240 followers · 1d</p>
          </div>

          <button class="more-button">•••</button>

        </div>


        <!-- Poll -->
        <div class="poll-content">

          <h1>
            What is the biggest gas-related
            safety concern in your industry?
          </h1>

          <p class="poll-intro">
            Your experience matters. Share your opinion
            and help us understand the safety challenges
            faced by industries today.
          </p>


          <!-- Poll Options -->
          <div class="poll-options">

            <button
              *ngFor="let option of options"
              class="poll-option"
              [class.selected]="hasVoted"
              (click)="vote(option)"
            >

              <div
                class="percentage-bar"
                [style.width.%]="
                  hasVoted ? getPercentage(option.votes) : 0
                "
              ></div>

              <span class="option-text">
                {{ option.label }}
              </span>

              <span
                class="percentage"
                *ngIf="hasVoted"
              >
                {{ getPercentage(option.votes) }}%
              </span>

            </button>

          </div>


          <!-- Thank you message -->
          <div
            class="vote-message"
            *ngIf="hasVoted"
          >
            ✓ Thanks for voting!
          </div>


          <!-- Footer -->
          <div class="poll-footer">

            <span>
              {{ totalVotes }} votes
            </span>

            <span>·</span>

            <span>
              1 week left
            </span>

          </div>

        </div>


        <!-- Engagement -->
        <div class="engagement">

          <span>👍 💡 ❤️</span>

          <span>
            24 reactions
          </span>

        </div>


        <!-- LinkedIn Actions -->
        <div class="actions">

          <button>👍 Like</button>

          <button>💬 Comment</button>

          <button>🔁 Repost</button>

          <button>↗ Send</button>

        </div>

      </div>

    </div>
  `,

  styles: [
    `

    * {
      box-sizing: border-box;
    }

    body {
      margin: 0;
      font-family: Arial, Helvetica, sans-serif;
      background: #f3f2ef;
      color: #1d2226;
    }

    .page {
      min-height: 100vh;
      display: flex;
      justify-content: center;
      align-items: flex-start;
      padding: 50px 20px;
      background: #f3f2ef;
    }

    .linkedin-card {
      width: 100%;
      max-width: 650px;
      background: white;
      border: 1px solid #d9d9d9;
      border-radius: 10px;
      overflow: hidden;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
    }

    .company-header {
      display: flex;
      align-items: center;
      padding: 18px 20px 10px;
    }

    .company-logo {
      width: 52px;
      height: 52px;
      margin-right: 12px;
    }

    .swan-logo {
      width: 52px;
      height: 52px;
      border-radius: 50%;
      background: #123b87;
      color: white;

      display: flex;
      align-items: center;
      justify-content: center;

      font-size: 11px;
      font-weight: bold;

      border: 3px solid #e5e9f2;
    }

    .company-info {
      flex: 1;
    }

    .company-info h2 {
      margin: 0;
      font-size: 15px;
      font-weight: 700;
    }

    .company-info p {
      margin: 5px 0 0;
      font-size: 12px;
      color: #666;
    }

    .more-button {
      border: none;
      background: transparent;
      font-size: 20px;
      color: #666;
      cursor: pointer;
    }

    .poll-content {
      padding: 15px 20px 20px;
    }

    .poll-content h1 {
      margin: 0;
      font-size: 24px;
      line-height: 1.35;
      font-weight: 700;
    }

    .poll-intro {
      font-size: 14px;
      line-height: 1.5;
      color: #555;
      margin: 12px 0 20px;
    }

    .poll-options {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    .poll-option {
      position: relative;
      width: 100%;
      min-height: 52px;
      overflow: hidden;

      border: 1.5px solid #0a66c2;
      border-radius: 28px;

      background: white;

      display: flex;
      align-items: center;

      padding: 0 18px;

      cursor: pointer;
      text-align: left;

      transition: 0.2s;
    }

    .poll-option:hover {
      background: #f3f8fc;
    }

    .percentage-bar {
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;

      background: #dbeeff;

      transition: width 0.6s ease;

      z-index: 0;
    }

    .option-text {
      position: relative;
      z-index: 1;
      flex: 1;

      font-size: 14px;
      font-weight: 600;
    }

    .percentage {
      position: relative;
      z-index: 1;

      font-size: 14px;
      font-weight: 700;
    }

    .vote-message {
      margin-top: 15px;
      padding: 12px;

      text-align: center;

      background: #e7f5e9;
      color: #287d3c;

      border-radius: 6px;

      font-size: 14px;
      font-weight: 600;
    }

    .poll-footer {
      display: flex;
      gap: 6px;

      margin-top: 15px;

      font-size: 12px;
      color: #666;
    }

    .engagement {
      border-top: 1px solid #eee;

      padding: 12px 20px;

      display: flex;
      gap: 8px;

      font-size: 12px;
      color: #666;
    }

    .actions {
      border-top: 1px solid #eee;

      display: flex;
      justify-content: space-around;

      padding: 8px;
    }

    .actions button {
      border: none;
      background: transparent;

      color: #555;

      font-size: 13px;
      font-weight: 600;

      padding: 8px 10px;

      cursor: pointer;
      border-radius: 5px;
    }

    .actions button:hover {
      background: #f3f2ef;
    }

    @media (max-width: 600px) {

      .page {
        padding: 15px 5px;
      }

      .poll-content h1 {
        font-size: 20px;
      }

      .actions button {
        font-size: 11px;
      }

    }

  `,
  ],
})
export class App {
  hasVoted = false;

  options: PollOption[] = [
    {
      label: 'Gas leaks and detection',
      votes: 42,
    },

    {
      label: 'Poor ventilation',
      votes: 24,
    },

    {
      label: 'Lack of employee training',
      votes: 20,
    },

    {
      label: 'Delayed emergency response',
      votes: 14,
    },
  ];

  get totalVotes(): number {
    return this.options.reduce((total, option) => total + option.votes, 0);
  }

  getPercentage(votes: number): number {
    if (this.totalVotes === 0) {
      return 0;
    }

    return Math.round((votes / this.totalVotes) * 100);
  }

  vote(option: PollOption): void {
    if (this.hasVoted) {
      return;
    }

    option.votes++;

    this.hasVoted = true;
  }
}

bootstrapApplication(App).catch((err) => console.error(err));
