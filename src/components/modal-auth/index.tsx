"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const ModalAuth = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block">
      <div onClick={() => setIsOpen(!isOpen)}>{children}</div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="bg-white rounded-lg p-4 shadow-blue-400 shadow-lg absolute top-full right-0 min-w-[200px] z-50 mt-2 gap-2 flex flex-col"
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{
              duration: 0.35,
              ease: [0.25, 0.1, 0.25, 1], // tương đương ease-in-out mượt
            }}
          >
            <Link href="/login">
              <h3 className="text-gray-500 font-semibold text-sm cursor-pointer hover:text-blue-500">
                Đăng nhập
              </h3>
            </Link>
            <Link href="/register">
              <h3 className="text-gray-500 font-semibold text-sm cursor-pointer hover:text-blue-500">
                Đăng ký
              </h3>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ModalAuth;
