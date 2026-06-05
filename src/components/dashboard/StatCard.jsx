// import { Card, CardContent } from "@/components/ui/card";

// import { Progress } from "@/components/ui/progress";

// export function StatCard({
//   title,
//   value,
//   subtitle,
//   progress,
//   color = "bg-cyan-500",
//   textColor = "text-black",
// })
//  {
    
 
//   return (
//     <Card className="relative overflow-hidden border-0 shadow-sm">
//       {/* الخط الجانبي */}
//       <div
  
//         className={`absolute start-0 top-0 h-full w-1 ${color}`}
//       />

//       <CardContent className="space-y-6 p-6">
//         <div className="space-y-2 text-center">
//           <p className="text-sm text-muted-foreground">
//             {title}
//           </p>

//           <h2 className="text-5xl font-bold tracking-tight text-black  ${textColor}">
//             {value}
//           </h2>

//           <p className="text-sm text-muted-foreground">
//             {subtitle}
//           </p>
//         </div>

//         <Progress value={progress} />
//       </CardContent>
//     </Card>
//   );
// }
import { Card, CardContent } from "@/components/ui/card";

import { Progress } from "@/components/ui/progress";
//import { COLORS } from "@/Constant/Colors";


export function StatCard({
  title,
  value,
  subtitle,
  progress,
  showProgress = true,
  color = "bg-cyan-500",
  textColor = "black",
}) {
  return (
    <Card className="relative overflow-hidden border-0 shadow-sm w-60 h-35 ">
      <div
        className={`absolute start-0 top-0 h-full w-1 ${color}`}
      />

      <CardContent className="space-y-6 p-4">
        <div className="space-y-1  text-start">
          <p className="text-sm text-muted-foreground">
            {title}
          </p>

          <h2
            style={{ color: textColor }}
  className="text-5xl font-bold tracking-tight"
          >
            {value}
          </h2>

          <p className="text-sm text-muted-foreground">
            {subtitle}
          </p>
        </div>

        <  Progress value={showProgress && progress} />
      </CardContent>
    </Card>
  );
}