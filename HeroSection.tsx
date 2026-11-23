import FadeIn from './FadeIn';
import Magnet from './Magnet';
import Avatar from './Avatar';
import SocialLinks from './SocialLinks';
import { ContactButton } from './Buttons';

export default function HeroSection() {
  return <section className="relative flex min-h-[760px] h-screen flex-col" style={{ overflowX: 'clip' }}>
    <FadeIn as="nav" y={-20} className="relative z-30 flex flex-wrap justify-between gap-3 px-6 pt-6 md:px-10 md:pt-8">
      {['About', 'Experience', 'Expertise', 'Education', 'Contact'].map((label) => <a key={label} href={`#${label.toLowerCase()}`} className="text-xs sm:text-sm font-medium uppercase tracking-wider text-[#D7E2EA] transition-opacity hover:opacity-70 md:text-lg">{label}</a>)}
    </FadeIn>
    <div className="overflow-hidden"><FadeIn delay={0.15} y={40}><h1 className="hero-heading mt-8 w-full whitespace-nowrap text-center text-[12vw] font-black uppercase leading-none tracking-tight sm:mt-5 sm:text-[13vw] md:-mt-3 md:text-[14vw]">Hi, I&apos;m Amitesh</h1></FadeIn></div>
    <Magnet padding={150} strength={2} activeTransition="transform 0.3s ease-out" inactiveTransition="transform 0.6s ease-in-out" className="absolute left-1/2 top-[53%] z-10 w-[260px] -translate-x-1/2 -translate-y-1/2 sm:top-auto sm:bottom-16 sm:w-[370px] sm:translate-y-0 md:w-[430px] lg:w-[490px]">
      <FadeIn delay={0.6} y={30}><Avatar /></FadeIn>
    </Magnet>
    <div className="relative z-20 mt-auto flex items-end justify-between gap-4 px-6 pb-7 sm:pb-8 md:px-10 md:pb-10">
      <FadeIn delay={0.35} y={20} className="flex flex-col gap-4"><p className="max-w-[190px] font-light uppercase leading-snug tracking-wide text-[#D7E2EA] sm:max-w-[260px]" style={{ fontSize: 'clamp(0.72rem, 1.4vw, 1.25rem)' }}>AML / KYC compliance · Financial Crime · Transaction Monitoring</p><SocialLinks /></FadeIn>
      <FadeIn delay={0.5} y={20} className="flex flex-col items-end gap-3"><a href="./Amitesh-Jagdhane-Resume.pdf" download className="text-[10px] sm:text-xs uppercase tracking-widest text-white/70 underline underline-offset-4">Download CV ↓</a><ContactButton href="#contact">Let&apos;s talk</ContactButton></FadeIn>
    </div>
  </section>;
}
