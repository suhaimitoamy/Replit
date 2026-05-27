import React from 'react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ error, errorInfo });
    console.error("ErrorBoundary caught an error", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-darker text-danger p-8 flex flex-col items-center justify-center font-sans">
          <div className="bg-dark p-6 rounded-xl border border-danger max-w-xl w-full">
            <h1 className="text-2xl font-bold font-mono mb-4 text-neon">Runtime Error!</h1>
            <p className="mb-4">Sistem mendeteksi kesalahan pada komponen React. Jangan khawatir, Anda bisa mencoba refresh halaman atau mereset data.</p>
            
            <div className="bg-darker p-4 rounded text-xs font-mono overflow-auto max-h-60 mb-4 border border-gray-800 text-gray-300">
              {this.state.error && this.state.error.toString()}
              <br />
              {this.state.errorInfo && this.state.errorInfo.componentStack}
            </div>
            
            <div className="flex gap-4">
              <button 
                onClick={() => window.location.reload()}
                className="bg-neon text-dark font-bold py-2 px-4 rounded"
              >
                Refresh Halaman
              </button>
              <button 
                onClick={() => {
                  indexedDB.deleteDatabase('amy_trading_quest_db');
                  window.location.href = '/';
                }}
                className="bg-danger text-white font-bold py-2 px-4 rounded"
              >
                Hard Reset (Hapus Data)
              </button>
            </div>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
