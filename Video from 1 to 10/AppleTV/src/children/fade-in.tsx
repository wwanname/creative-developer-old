import { motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
  className?: string; //
};

export const FadeIn = ({ children, className }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      className={className} //
    >
      {children}
    </motion.div>
  );
};
