import { Component, OnInit, OnDestroy, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface FormData {
  name: string;
  phone: string;
  service: string;
  message: string;
}
@Component({
  selector: 'app-corporate-template',
  templateUrl: './corporate-template.component.html',
  styleUrls: ['./corporate-template.component.scss']
})
export class CorporateTemplateComponent implements OnInit {
 activePage: string = 'home';
  isMobileMenuOpen: boolean = false;
  openFaqIndex: number | null = null;
  showToast: boolean = false;
  headerShadow: string = '0 2px 16px rgba(0,0,0,0.18)';

  formData: FormData = {
    name: '',
    phone: '',
    service: '',
    message: ''
  };

  private scrollListener!: () => void;
  private toastTimeout: any;

  // ── SERVICES DATA ──
  services = [
    {
      icon: '🔧',
      name: 'Plumbing Services',
      desc: 'Leaks, blocked drains, pipe replacement, water heaters & more. Quick repairs with zero mess.',
      tags: ['Pipe Repair', 'Drain Cleaning', 'Water Heater']
    },
    {
      icon: '⚡',
      name: 'Electrical Wiring',
      desc: 'Safe, certified electrical work. New wiring, panel upgrades, fan/AC installation, short-circuit fixes.',
      tags: ['Wiring', 'Panel Upgrade', 'Lighting']
    },
    {
      icon: '🏭',
      name: 'Industrial Maintenance',
      desc: 'Factory equipment servicing, machinery repair, preventive maintenance programs for businesses.',
      tags: ['Machinery', 'AMC', 'Shutdown Support']
    },
    {
      icon: '🏠',
      name: 'General Repairs',
      desc: 'Carpentry, painting, tile work, furniture assembly, appliance repair — your all-in-one handyman.',
      tags: ['Carpentry', 'Painting', 'Tiling']
    }
  ];

  // ── TESTIMONIALS DATA ──
  testimonials = [
    {
      initials: 'RK',
      name: 'Ramesh Kumar',
      role: 'Homeowner, Chennai',
      text: 'Called AllWorks at 11 PM for a burst pipe. The technician arrived in 25 minutes and fixed everything in under an hour. Absolutely brilliant service!',
      stars: 5
    },
    {
      initials: 'PV',
      name: 'Priya Venkat',
      role: 'Factory Manager, Coimbatore',
      text: 'We run a garment factory and AllWorks handles all our maintenance on an AMC. Machine downtime has dropped by 70%. Worth every rupee.',
      stars: 5
    },
    {
      initials: 'AS',
      name: 'Ankit Shah',
      role: 'Business Owner, Mumbai',
      text: 'Hired them for complete electrical rewiring of my office. Clean work, no mess, finished on schedule. Pricing was exactly as quoted — no surprises.',
      stars: 5
    }
  ];

  // ── FAQ DATA ──
  faqs = [
    {
      question: 'How fast can a technician reach me?',
      answer: 'In most service areas, we dispatch within 15 minutes and arrive within 30 minutes. For remote areas, we\'ll give you an accurate ETA when you call.'
    },
    {
      question: 'Do you charge for the initial inspection?',
      answer: 'We provide a free quote over the phone for most standard jobs. For complex assessments, a minimal diagnostic fee may apply — which is waived if you proceed with the repair.'
    },
    {
      question: 'Is your work guaranteed?',
      answer: 'Yes! All work comes with a 90-day workmanship warranty. If the same issue returns within 90 days due to our repair, we fix it at zero cost to you.'
    },
    {
      question: 'Do you serve factories and commercial properties?',
      answer: 'Absolutely. We specialise in industrial maintenance, annual maintenance contracts (AMCs), and large-scale commercial projects for factories and warehouses.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept cash, UPI (GPay, PhonePe, Paytm), NEFT/RTGS, and all major credit/debit cards. GST invoices are issued for all commercial work.'
    },
    {
      question: 'Which cities do you currently serve?',
      answer: 'We currently serve Chennai, Coimbatore, Bangalore, Mumbai, Pune, Hyderabad, and 10+ more cities. Contact us to check availability in your area.'
    }
  ];

  // ── SERVICE OPTIONS ──
  serviceOptions: string[] = [
    'Plumbing – Leak / Pipe Repair',
    'Plumbing – Drain Cleaning',
    'Plumbing – Water Heater',
    'Electrical – Wiring / Rewiring',
    'Electrical – Short Circuit Fix',
    'Electrical – Installation',
    'Industrial – Machine Repair',
    'Industrial – AMC Contract',
    'General Repairs / Handyman',
    'Emergency Service',
    'Other – Please Describe'
  ];
  constructor() { }
  ngOnInit(): void {
    this.scrollListener = () => {
      this.headerShadow = window.scrollY > 10
        ? '0 4px 24px rgba(0,0,0,0.25)'
        : '0 2px 16px rgba(0,0,0,0.18)';
    };
    window.addEventListener('scroll', this.scrollListener);
  }

  ngOnDestroy(): void {
    window.removeEventListener('scroll', this.scrollListener);
    if (this.toastTimeout) clearTimeout(this.toastTimeout);
  }

  // ── PAGE NAVIGATION ──
  showPage(id: string): void {
    this.activePage = id;
    this.isMobileMenuOpen = false;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  isActivePage(id: string): boolean {
    return this.activePage === id;
  }

  // ── MOBILE MENU ──
  toggleMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  // ── FAQ ──
  toggleFaq(index: number): void {
    this.openFaqIndex = this.openFaqIndex === index ? null : index;
  }

  isFaqOpen(index: number): boolean {
    return this.openFaqIndex === index;
  }

  getStars(count: number): number[] {
    return Array(count).fill(0);
  }

  // ── FORM SUBMIT ──
  submitForm(): void {
    if (!this.formData.name.trim() || !this.formData.phone.trim() || !this.formData.service) {
      alert('Please fill in your Name, Phone, and Service Needed.');
      return;
    }

    this.showToast = true;
    this.toastTimeout = setTimeout(() => {
      this.showToast = false;
    }, 4000);

    this.formData = { name: '', phone: '', service: '', message: '' };
  }

 
}
