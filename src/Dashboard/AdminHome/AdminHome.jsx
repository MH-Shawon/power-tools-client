// import { useContext } from "react";
// import { AuthContext } from "../../../Providers/AuthProvider";
// import { useQuery } from "@tanstack/react-query";
// import useAxiosSecure from "../../../hooks/useAxiosSecure";
// import { FaUsers, FaWallet } from "react-icons/fa";
// import { MdOutlineProductionQuantityLimits } from "react-icons/md";
// import { CiDeliveryTruck } from "react-icons/ci";
// import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Pie, PieChart, Legend } from 'recharts';

// const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

// const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];





const AdminHome = () => {
  // const { user } = useContext(AuthContext);
  // const axiosSecure = useAxiosSecure();
  // const { data: adminStats = {} } = useQuery({
  //   queryKey: ["admin-stats"],
  //   queryFn: async () => {
  //     const res = await axiosSecure.get("/admin-stats");
  //     // console.log(res.data);
  //     return res.data;
  //   },
  // });

  // const { data: chartData = [] } = useQuery({
  //   queryKey: ["order-stats"],
  //   queryFn: async () => {
  //     const chartDataRes = await axiosSecure.get("/order-stats");
      
  //     return chartDataRes.data
  //   },
  // });

  //   // custom shape for the barChart

  //   const getPath = (x, y, width, height) => {
  //       return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  // ${x + width / 2}, ${y}
  // C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  // Z`;
  //   };

  //   const TriangleBar = (props) => {
  //       const { fill, x, y, width, height } = props;

  //       return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  //   };

  //   // custom shape pie chart 
  //   const RADIAN = Math.PI / 180;
  //   const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
  //       const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  //       const x = cx + radius * Math.cos(-midAngle * RADIAN);
  //       const y = cy + radius * Math.sin(-midAngle * RADIAN);

  //       return (
  //           <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
  //               {`${(percent * 100).toFixed(0)}%`}
  //           </text>
  //       );
  //   };

  //   // const data = [
  //   //     { name: 'Group A', value: 400 },
  //   //     { name: 'Group B', value: 300 },
  //   //     { name: 'Group C', value: 300 },
  //   //     { name: 'Group D', value: 200 },
  //   // ];

  //   const pieChartData = chartData.map(data => {
  //       return { name: data.category, value: data.revenue }
  //   })

  return (
    // <div className="mt-12 ml-8">
    //   <h3 className="text-[32px] font-semibold">
    //     Hi,{" "}
    //     <span className="text-teal-600">
    //       {user?.displayName ? user.displayName : ""}
    //     </span>{" "}
    //     welcome back!
    //   </h3>
    //   <div className="grid grid-cols-1 gap-6 mt-6 md:grid-cols-4">
    //     <div className="stats shadow bg-gradient-to-r from-[#BB34F5] to-[#FCDBFF] rounded-lg">
    //       <div className="flex items-center justify-center px-8 stat">
    //         <div className="">
    //           <FaWallet className="w-11 h-11" />
    //         </div>
    //         <div className="">
    //           <div className="text-center stat-value">
    //             {adminStats?.revenue}
    //           </div>
    //           <div className="text-sm text-slate-900">revenue</div>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="stats shadow bg-gradient-to-r from-[#D3A256] to-[#FDE8C0] rounded-lg">
    //       <div className="flex items-center justify-center px-8 stat">
    //         <div className="">
    //           <FaUsers className="w-11 h-11" />
    //         </div>
    //         <div className="">
    //           <div className="text-center stat-value">{adminStats.users}</div>
    //           <div className="text-sm text-slate-900">customers</div>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="stats shadow bg-gradient-to-r from-[#FE4880] to-[#FECDE9] rounded-lg">
    //       <div className="flex items-center justify-center px-8 stat">
    //         <div className="">
    //           <MdOutlineProductionQuantityLimits className="w-11 h-11" />
    //         </div>
    //         <div className="">
    //           <div className="text-center stat-value">
    //             {adminStats.menuItems}
    //           </div>
    //           <div className="text-sm text-slate-900">products</div>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="stats shadow bg-gradient-to-r from-[#6AAEFF] to-[#B6F7FF] rounded-lg">
    //       <div className="flex items-center justify-center px-8 stat">
    //         <div className="">
    //           <CiDeliveryTruck className="w-11 h-11" />
    //         </div>
    //         <div className="">
    //           <div className="text-center stat-value">{adminStats.orders}</div>
    //           <div className="text-sm text-slate-900">orders</div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="flex h-[450px] mt-8 bg-white mb-8">
    //     <div className="w-1/2 my-auto">

    //               <BarChart
    //                   width={450}
    //                   height={400}
    //                   data={chartData}
    //                   margin={{
    //                       top: 20,
    //                       right: 30,
    //                       left: 20,
    //                       bottom: 5,
    //                   }}
    //               >
    //                   <CartesianGrid strokeDasharray="3 3" />
    //                   <XAxis dataKey="category" />
    //                   <YAxis />
    //                   <Bar dataKey="quantity" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
    //                       {chartData.map((entry, index) => (
    //                           <Cell key={`cell-${index}`} fill={colors[index % 6]} />
    //                       ))}
    //                   </Bar>
    //               </BarChart>

    //     </div>
    //     <div className="w-1/2 my-auto">
    //               <PieChart width={450} height={400}>
    //                   <Legend></Legend>
    //                   <Pie
    //                       data={pieChartData}
    //                       cx="50%"
    //                       cy="50%"
    //                       labelLine={false}
    //                       label={renderCustomizedLabel}
    //                       outerRadius={120}
    //                       fill="#8884d8"
    //                       dataKey="value"
    //                   >
    //                       {pieChartData.map((entry, index) => (
    //                           <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
    //                       ))}
    //                   </Pie>
    //               </PieChart>
    //     </div>
    //   </div>
    // </div>
    <div>
      this is admin home
    </div>
  );
};
export default AdminHome;
