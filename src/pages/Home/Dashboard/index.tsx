import React from 'react';
import { BarChart, LineChart, PieChart } from '@mui/x-charts';
import { Stack, useTheme } from '@mui/material';
import StatCard from '@components/StatCard';
import { People } from '@mui/icons-material';
import NetworkCheckIcon from '@mui/icons-material/NetworkCheck';
import WifiOffIcon from '@mui/icons-material/WifiOff';
import BarChartIcon from '@mui/icons-material/BarChart';
import ApartmentIcon from '@mui/icons-material/Apartment';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { dataset } from './makeData';
import Divider from '@mui/material/Divider';

function Dashboard() {
  const theme = useTheme();
  const systemStatus: 'Online' | 'Offline' = 'Online';
  const valueFormatter = (value: number | null) => `${value}mm`;
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box>
        <Typography variant="h3" align={'left'}>
          Hi, Welcome back!
        </Typography>
        <Stack direction={'row'} spacing={10} m={5}>
          <StatCard
            title="Registered Users"
            value={'142.534'}
            icon={
              <People
                sx={{
                  width: 80,
                  height: 80,
                  color: theme.palette.primary.main,
                }}
              />
            }
          />
          <StatCard
            title="Total Company"
            value={'430'}
            icon={
              <ApartmentIcon
                sx={{
                  width: 80,
                  height: 80,
                  color: theme.palette.primary.main,
                }}
              />
            }
          />
          <StatCard
            title="Active User"
            value={'56.232'}
            icon={
              <BarChartIcon
                sx={{
                  width: 80,
                  height: 80,
                  color: theme.palette.primary.main,
                }}
              />
            }
          />
          <StatCard
            title="System Status"
            value={systemStatus}
            icon={
              systemStatus === 'Online' ? (
                <NetworkCheckIcon
                  sx={{
                    width: 80,
                    height: 80,
                    color: theme.palette.primary.main,
                  }}
                />
              ) : (
                <WifiOffIcon
                  sx={{
                    width: 80,
                    height: 80,
                    color: theme.palette.primary.main,
                  }}
                />
              )
            }
          />
        </Stack>
      </Box>
      <Box>
        <Stack direction="row" spacing={2}>
          <BarChart
            series={[
              { data: [3, 4, 1, 6, 5], stack: 'A', label: 'Series A1' },
              { data: [4, 3, 1, 5, 8], stack: 'A', label: 'Series A2' },
              { data: [4, 2, 5, 4, 1], stack: 'B', label: 'Series B1' },
              { data: [2, 8, 1, 3, 1], stack: 'B', label: 'Series B2' },
              { data: [10, 6, 5, 8, 9], label: 'Series C1' },
            ]}
            width={600}
            height={350}
          />
          <BarChart
            dataset={dataset}
            yAxis={[{ scaleType: 'band', dataKey: 'month' }]}
            series={[
              { dataKey: 'seoul', label: 'Seoul rainfall', valueFormatter },
            ]}
            layout="horizontal"
            width={600}
            height={350}
            grid={{ vertical: true }}
            xAxis={[
              {
                label: 'rainfall (mm)',
              },
            ]}
          />
        </Stack>
        <Stack direction="row" spacing={2} alignItems={'left'}>
          <LineChart
            xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
            series={[
              {
                data: [2, 5.5, 2, 8.5, 1.5, 5],
              },
            ]}
            width={600}
            height={350}
          />
          <PieChart
            series={[
              {
                data: [
                  { id: 0, value: 10, label: 'series A' },
                  { id: 1, value: 15, label: 'series B' },
                  { id: 2, value: 20, label: 'series C' },
                  { id: 3, value: 25, label: 'series D' },
                  { id: 4, value: 30, label: 'series E' },
                ],
                innerRadius: 30,
                outerRadius: 100,
                paddingAngle: 5,
                cornerRadius: 5,
                startAngle: -90,
                endAngle: 180,
                cx: 150,
                cy: 150,
              },
            ]}
            width={600}
            height={350}
          />
        </Stack>
      </Box>
    </Box>
  );
}

export default Dashboard;
