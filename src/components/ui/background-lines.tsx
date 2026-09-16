import { cn } from '@/lib/utils'
import { motion } from 'motion/react'
import type { ReactNode } from 'react'
import { BACKGROUND_LINE_PATHS, strokeColorForIndex } from '@/components/ui/background-lines-paths'

const pathVariants = {
  initial: { strokeDashoffset: 800, strokeDasharray: '50 800' },
  animate: {
    strokeDashoffset: 0,
    strokeDasharray: '20 800',
    opacity: [0, 0.85, 0.85, 0],
  },
}

function BackgroundLinesSvg({ duration = 12 }: { duration?: number }) {
  const layers = [0, 1] as const

  return (
    <motion.svg
      viewBox="0 0 1440 900"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="h-full w-full"
      aria-hidden="true"
    >
      {layers.map((layer) =>
        BACKGROUND_LINE_PATHS.map((path, index) => (
          <motion.path
            key={`line-${layer}-${index}`}
            d={path}
            stroke={strokeColorForIndex(index + layer)}
            strokeWidth="2.5"
            strokeLinecap="round"
            variants={pathVariants}
            initial="initial"
            animate="animate"
            transition={{
              duration,
              ease: 'linear',
              repeat: Infinity,
              repeatType: 'loop',
              delay: index * 0.35 + layer * 0.5,
              repeatDelay: 2 + (index % 4),
            }}
          />
        )),
      )}
    </motion.svg>
  )
}

export function BackgroundLines({
  children,
  className,
  svgOptions,
}: {
  children: ReactNode
  className?: string
  svgOptions?: {
    duration?: number
  }
}) {
  return (
    <div className={cn('relative w-full bg-white', className)}>
      <div className="pointer-events-none absolute inset-0 overflow-hidden [mask-image:radial-gradient(ellipse_at_center,black,transparent_88%)]">
        <BackgroundLinesSvg duration={svgOptions?.duration} />
      </div>
      <div className="relative z-20 w-full">{children}</div>
    </div>
  )
}
