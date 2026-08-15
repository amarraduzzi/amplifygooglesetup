export type Language = 'fr' | 'ar' | 'en';

export interface SubStep {
  id: string;
  number: number;
  title: string;
  detail?: string;
  directUrl?: string;
  urlLabel?: string;
}

export interface StepData {
  id: 'gbp' | 'ga4' | 'gsc' | 'ads';
  stepNumber: number;
  name: string;
  tagline: string;
  timeEstimate: string;
  officialUrl: string;
  officialUrlLabel: string;
  iconName: 'store' | 'chart' | 'search' | 'ads';
  description: string;
  isPlaceholder?: boolean;
  subSteps: SubStep[];
  tip: string;
}

export interface TranslationSet {
  appTitle: string;
  appSubtitle: string;
  welcomeBadge: string;
  landingTitle: string;
  landingSubtitle: string;
  landingAudience: string;
  landingDuration: string;
  startButton: string;
  overviewHeading: string;
  stepsLabel: string;
  stepOf: string;
  nextStep: string;
  prevStep: string;
  finishButton: string;
  markAllDone: string;
  resetStep: string;
  completedBadge: string;
  activeBadge: string;
  notStartedBadge: string;
  upcomingBadge: string;
  tipLabel: string;
  openGoogleLink: string;
  completedStepsCount: string;
  congratsTitle: string;
  congratsSubtitle: string;
  congratsSummaryTitle: string;
  congratsTipTitle: string;
  congratsTipText: string;
  contactAmplifyTitle: string;
  contactAmplifyText: string;
  contactButton: string;
  restartButton: string;
  progressOverview: string;
  placeholderNotice: string;
  steps: StepData[];
}
