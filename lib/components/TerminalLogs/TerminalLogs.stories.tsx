import type { Meta, StoryObj } from '@storybook/react';

import { TerminalLogs as TerminalLogsComponent } from './TerminalLogs';

type Story = StoryObj<typeof TerminalLogsComponent>;

const meta = {
  title: 'Design System/TerminalLogs',
  component: TerminalLogsComponent,
} satisfies Meta<typeof TerminalLogsComponent>;

const provisioningLogs = [
  '\x1b[36m🚀 Starting cluster provisioning...\x1b[0m',
  '\x1b[33m🔍 Validating configuration...\x1b[0m',
  '\x1b[32m✅ Configuration valid: 3 master nodes, 5 worker nodes.\x1b[0m',
  '\x1b[34m📦 Pulling Kubernetes images...\x1b[0m',
  '\x1b[36m⏳ Downloading container runtime...\x1b[0m',
  '\x1b[32m✅ Container runtime installed.\x1b[0m',
  '\x1b[33m🔧 Initializing master node 1 (10.0.0.1)...\x1b[0m',
  '\x1b[32m✅ Master node 1 ready.\x1b[0m',
  '\x1b[33m🔧 Initializing master node 2 (10.0.0.2)...\x1b[0m',
  '\x1b[32m✅ Master node 2 ready.\x1b[0m',
  '\x1b[33m🔧 Initializing master node 3 (10.0.0.3)...\x1b[0m',
  '\x1b[32m✅ Master node 3 ready.\x1b[0m',
  '\x1b[36m⚡ Joining worker nodes...\x1b[0m',
  '\x1b[34m🖥️ Worker node 1 (10.0.1.1) joined the cluster.\x1b[0m',
  '\x1b[34m🖥️ Worker node 2 (10.0.1.2) joined the cluster.\x1b[0m',
  '\x1b[34m🖥️ Worker node 3 (10.0.1.3) joined the cluster.\x1b[0m',
  '\x1b[34m🖥️ Worker node 4 (10.0.1.4) joined the cluster.\x1b[0m',
  '\x1b[34m🖥️ Worker node 5 (10.0.1.5) joined the cluster.\x1b[0m',
  '\x1b[34m🖥️ Worker node 6 (10.0.1.6) joined the cluster.\x1b[0m',
  '\x1b[34m🖥️ Worker node 7 (10.0.1.7) joined the cluster.\x1b[0m',
  '\x1b[34m🖥️ Worker node 8 (10.0.1.8) joined the cluster.\x1b[0m',
  '\x1b[34m🖥️ Worker node 9 (10.0.1.9) joined the cluster.\x1b[0m',
  '\x1b[34m🖥️ Worker node 10 (10.0.1.10) joined the cluster.\x1b[0m',
  '\x1b[33m📜 Applying network policies...\x1b[0m',
  '\x1b[36m🌍 Deploying CoreDNS...\x1b[0m',
  '\x1b[32m✅ CoreDNS is running.\x1b[0m',
  '\x1b[33m🔑 Configuring authentication...\x1b[0m',
  '\x1b[32m✅ Authentication setup complete.\x1b[0m',
  '\x1b[33m🔄 Deploying Kubernetes dashboard...\x1b[0m',
  '\x1b[32m✅ Kubernetes dashboard available at \x1b[34mhttps://dashboard.example.com\x1b[0m',
  '\x1b[34m📦 Installing Helm...\x1b[0m',
  '\x1b[32m✅ Helm installed successfully.\x1b[0m',
  '\x1b[36m⚙️ Deploying monitoring stack (Prometheus + Grafana)...\x1b[0m',
  '\x1b[32m✅ Monitoring available at \x1b[34mhttps://monitoring.example.com\x1b[0m',
  '\x1b[33m🛠️ Deploying ingress controller...\x1b[0m',
  '\x1b[32m✅ Ingress controller ready.\x1b[0m',
  '\x1b[33m🔍 Running cluster health checks...\x1b[0m',
  '\x1b[32m✅ All nodes are healthy.\x1b[0m',
  '\x1b[32m✅ All services are running.\x1b[0m',
  '\x1b[1m\x1b[32m🎉 Cluster provisioning completed successfully!\x1b[0m',
  '\x1b[1m\x1b[34m🌍 Kubernetes API available at https://k8s-api.example.com\x1b[0m',
];

export const TerminalLogs = {
  render: () => {
    type HandleParams = {
      onWriteLog: (message: string) => void;
    };

    const handleMethods = ({ onWriteLog }: HandleParams) => {
      provisioningLogs.forEach((log, index) => {
        setTimeout(() => onWriteLog(log), 1000 * index);
      });
    };

    return (
      <div className="min-w-[600px] h-[700px]">
        <TerminalLogsComponent handleMethods={handleMethods} />
      </div>
    );
  },
} satisfies Story;

export default meta;
