"use client";

import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

// Define proper types for health data
interface HealthDataPoint {
  date: string;
  value: number;
  reading: string;
  unit: string;
  status: StatusType;
  timestamp: string;
}

// Define status types
type StatusType = "normal" | "slightly-high" | "high";
type BadgeVariant = "default" | "secondary" | "destructive" | "outline";
type MetricType = "blood-pressure" | "glucose" | "temperature";
type ViewType = "timeline" | "list";
type TimeRange = "7days" | "30days" | "90days";

// Define status config interface
interface StatusConfig {
  label: string;
  variant: BadgeVariant;
  className: string;
}

// Custom tooltip props interface - THIS IS THE FIX
interface CustomTooltipProps {
  active?: boolean;
  payload?: Array<{
    payload: HealthDataPoint;
    value: number;
  }>;
  label?: string;
}

// Sample data structure with proper typing
const healthData: Record<MetricType, HealthDataPoint[]> = {
  "blood-pressure": [
    {
      date: "May 17",
      value: 65,
      reading: "120/80",
      unit: "mmHg",
      status: "normal",
      timestamp: "2:30 PM",
    },
    {
      date: "May 18",
      value: 70,
      reading: "130/85",
      unit: "mmHg",
      status: "slightly-high",
      timestamp: "3:15 PM",
    },
    {
      date: "May 19",
      value: 68,
      reading: "125/82",
      unit: "mmHg",
      status: "normal",
      timestamp: "1:45 PM",
    },
    {
      date: "May 20",
      value: 75,
      reading: "140/90",
      unit: "mmHg",
      status: "high",
      timestamp: "4:20 PM",
    },
    {
      date: "May 21",
      value: 60,
      reading: "115/75",
      unit: "mmHg",
      status: "normal",
      timestamp: "10:30 AM",
    },
    {
      date: "May 22",
      value: 58,
      reading: "110/70",
      unit: "mmHg",
      status: "normal",
      timestamp: "2:15 PM",
    },
    {
      date: "May 23",
      value: 65,
      reading: "120/80",
      unit: "mmHg",
      status: "normal",
      timestamp: "5:00 PM",
    },
  ],
  glucose: [
    {
      date: "May 17",
      value: 95,
      reading: "95",
      unit: "mg/dl",
      status: "normal",
      timestamp: "8:00 AM",
    },
    {
      date: "May 18",
      value: 110,
      reading: "110",
      unit: "mg/dl",
      status: "slightly-high",
      timestamp: "8:15 AM",
    },
    {
      date: "May 19",
      value: 88,
      reading: "88",
      unit: "mg/dl",
      status: "normal",
      timestamp: "7:45 AM",
    },
    {
      date: "May 20",
      value: 125,
      reading: "125",
      unit: "mg/dl",
      status: "high",
      timestamp: "8:30 AM",
    },
    {
      date: "May 21",
      value: 92,
      reading: "92",
      unit: "mg/dl",
      status: "normal",
      timestamp: "8:10 AM",
    },
    {
      date: "May 22",
      value: 85,
      reading: "85",
      unit: "mg/dl",
      status: "normal",
      timestamp: "8:20 AM",
    },
    {
      date: "May 23",
      value: 98,
      reading: "98",
      unit: "mg/dl",
      status: "normal",
      timestamp: "8:05 AM",
    },
  ],
  temperature: [
    {
      date: "May 17",
      value: 98.6,
      reading: "98.6",
      unit: "°F",
      status: "normal",
      timestamp: "6:00 AM",
    },
    {
      date: "May 18",
      value: 99.2,
      reading: "99.2",
      unit: "°F",
      status: "slightly-high",
      timestamp: "6:15 AM",
    },
    {
      date: "May 19",
      value: 98.4,
      reading: "98.4",
      unit: "°F",
      status: "normal",
      timestamp: "6:10 AM",
    },
    {
      date: "May 20",
      value: 100.1,
      reading: "100.1",
      unit: "°F",
      status: "high",
      timestamp: "6:30 AM",
    },
    {
      date: "May 21",
      value: 98.2,
      reading: "98.2",
      unit: "°F",
      status: "normal",
      timestamp: "6:05 AM",
    },
    {
      date: "May 22",
      value: 98.8,
      reading: "98.8",
      unit: "°F",
      status: "normal",
      timestamp: "6:20 AM",
    },
    {
      date: "May 23",
      value: 98.6,
      reading: "98.6",
      unit: "°F",
      status: "normal",
      timestamp: "6:00 AM",
    },
  ],
};

const HealthMetricsTimeline: React.FC = () => {
  const [activeMetric, setActiveMetric] =
    useState<MetricType>("blood-pressure");
  const [viewType, setViewType] = useState<ViewType>("timeline");
  const [timeRange, setTimeRange] = useState<TimeRange>("7days");
  const [sortOrder] = useState<"asc" | "desc">("desc");

  const getStatusBadge = (status: StatusType) => {
    const statusConfig: Record<StatusType, StatusConfig> = {
      normal: {
        label: "Normal",
        variant: "default",
        className: "bg-green-100 text-green-700 hover:bg-green-100",
      },
      "slightly-high": {
        label: "Slightly High",
        variant: "secondary",
        className: "bg-yellow-100 text-yellow-700 hover:bg-yellow-100",
      },
      high: {
        label: "High",
        variant: "destructive",
        className: "bg-red-100 text-red-700 hover:bg-red-100",
      },
    };

    const config = statusConfig[status];
    return (
      <Badge variant={config.variant} className={config.className}>
        {config.label}
      </Badge>
    );
  };

  // const getMetricTitle = (metric: MetricType): string => {
  //   const titles: Record<MetricType, string> = {
  //     "blood-pressure": "Blood Pressure",
  //     glucose: "Glucose",
  //     temperature: "Temperature",
  //   };
  //   return titles[metric];
  // };

  const getCurrentData = (): HealthDataPoint[] => {
    let data = healthData[activeMetric] || [];

    // Apply time range filter (simplified for demo)
    if (timeRange === "7days") {
      data = data.slice(-7);
    }

    // Apply sorting for table view
    if (viewType === "list") {
      data = [...data].sort((a, b) => {
        const dateA = new Date(a.date + ", 2025");
        const dateB = new Date(b.date + ", 2025");
        return sortOrder === "asc"
          ? dateA.getTime() - dateB.getTime()
          : dateB.getTime() - dateA.getTime();
      });
    }

    return data;
  };

  // Fixed CustomTooltip component with proper typing
  const CustomTooltip: React.FC<CustomTooltipProps> = ({
    active,
    payload,
    label,
  }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-white p-3 border border-gray-200 rounded-lg shadow-md">
          <p className="font-medium text-gray-900">{label}</p>
          <p className="text-sm text-gray-600">
            {data.reading} {data.unit}{" "}
            <span className="capitalize">{data.status.replace("-", " ")}</span>
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 w-full lg:w-3/4 overflow-x-scroll">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4 sm:mb-0">
          Health Metrics Timeline
        </h2>

        <div className="flex items-center gap-2">
          {/* Metric Tabs */}
          <Tabs
            value={activeMetric}
            onValueChange={(value) => setActiveMetric(value as MetricType)}
          >
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="blood-pressure" className="text-xs">
                BP
              </TabsTrigger>
              <TabsTrigger value="glucose" className="text-xs">
                Glucose
              </TabsTrigger>
              <TabsTrigger value="temperature" className="text-xs">
                Temperature
              </TabsTrigger>
            </TabsList>
          </Tabs>

          {/* View Type Selector */}
          <Select
            value={viewType}
            onValueChange={(value) => setViewType(value as ViewType)}
          >
            <SelectTrigger className="w-32">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="timeline">Timeline</SelectItem>
              <SelectItem value="list">Sortable List</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Chart View */}
      {viewType === "timeline" && (
        <div className="mb-6">
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={getCurrentData()}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="date" stroke="#666" fontSize={12} />
                <YAxis stroke="#666" fontSize={12} />
                <Tooltip content={<CustomTooltip />} />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#ef4444"
                  strokeWidth={2}
                  dot={{ fill: "#ef4444", strokeWidth: 2, r: 4 }}
                  activeDot={{ r: 6, stroke: "#ef4444", strokeWidth: 2 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}

      {/* Table View */}
      {viewType === "list" && (
        <div className="mb-6">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Time</TableHead>
                <TableHead>
                  {activeMetric === "blood-pressure"
                    ? "Pressure metric"
                    : activeMetric === "glucose"
                    ? "Glucose level"
                    : "Temperature"}
                </TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {getCurrentData().map((item, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{item.date}</TableCell>
                  <TableCell>
                    {item.reading} {item.unit}
                  </TableCell>
                  <TableCell>{getStatusBadge(item.status)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}

      {/* Footer */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm text-gray-600">
        <div className="mb-2 sm:mb-0">Time Range: Last 7 days</div>
        <Select
          value={timeRange}
          onValueChange={(value) => setTimeRange(value as TimeRange)}
        >
          <SelectTrigger className="w-32">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="7days">Last 7 days</SelectItem>
            <SelectItem value="30days">Last 30 days</SelectItem>
            <SelectItem value="90days">Last 90 days</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default HealthMetricsTimeline;
