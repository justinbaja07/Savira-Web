import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClientInstance } from './lib/query-client';
import { pagesConfig } from './pages.config';

const { Pages, mainPage, Layout } = pagesConfig;

function AppRoutes() {
  return (
    <Routes>
      {Object.entries(Pages).map(([pageName, PageComponent]) => {
        const path = pageName === mainPage ? '/' : '/' + pageName.toLowerCase();
        const element = Layout
          ? <Layout currentPageName={pageName}><PageComponent /></Layout>
          : <PageComponent />;
        return <Route key={pageName} path={path} element={element} />;
      })}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClientInstance}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </QueryClientProvider>
  );
}