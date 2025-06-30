import React from 'react';
import { Loader2, CheckCircle, AlertCircle, Clock } from 'lucide-react';

interface ProcessingStatusProps {
  status: 'idle' | 'processing' | 'complete' | 'error';
  message: string;
  progress?: number;
}

const ProcessingStatus: React.FC<ProcessingStatusProps> = ({ status, message, progress = 0 }) => {
  const getStatusIcon = () => {
    switch (status) {
      case 'processing':
        return <Loader2 className="h-5 w-5 animate-spin text-primary-600" />;
      case 'complete':
        return <CheckCircle className="h-5 w-5 text-accent-600" />;
      case 'error':
        return <AlertCircle className="h-5 w-5 text-red-600" />;
      default:
        return <Clock className="h-5 w-5 text-gray-400" />;
    }
  };

  const getStatusColor = () => {
    switch (status) {
      case 'processing':
        return 'border-primary-200 bg-primary-50';
      case 'complete':
        return 'border-accent-200 bg-accent-50';
      case 'error':
        return 'border-red-200 bg-red-50';
      default:
        return 'border-gray-200 bg-gray-50';
    }
  };

  if (status === 'idle') return null;

  return (
    <div className={`rounded-xl border-2 p-4 transition-all ${getStatusColor()}`}>
      <div className="flex items-center space-x-3">
        {getStatusIcon()}
        <div className="flex-1">
          <p className="font-medium text-gray-900">{message}</p>
          {status === 'processing' && progress > 0 && (
            <div className="mt-2">
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-primary-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
              <p className="text-sm text-gray-600 mt-1">{progress}% complete</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProcessingStatus;