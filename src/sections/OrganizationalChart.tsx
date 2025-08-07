import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import { Separator } from "../../components/ui/separator";
import {
  Building2,
  Users,
  Lightbulb,
  Ruler,
  Wrench,
  FolderOpen,
  Computer,
  Briefcase,
} from "lucide-react";

const DepartmentCard = ({
  title,
  icon: Icon,
  color,
  roles,
}: {
  title: string;
  icon: React.ElementType;
  color: string;
  roles: Array<{
    title: string;
    team?: Array<{ name: string; isLead?: boolean }>;
  }>;
}) => (
  <Card className="w-full h-auto flex flex-col">
    <CardHeader className="pb-4 flex-shrink-0">
      <div className="flex items-center gap-2 sm:gap-3">
        <div
          className={`p-1.5 sm:p-2 rounded-lg ${color} flex-shrink-0`}
        >
          <Icon className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
        </div>
        <CardTitle className="text-sm sm:text-sm leading-tight text-primary">
          {title}
        </CardTitle>
      </div>
    </CardHeader>
    <CardContent className="flex-1">
      <div className="space-y-4 sm:space-y-6">
        {roles.map((role, index) => (
          <div key={index} className="space-y-2 sm:space-y-3">
            <h4 className="font-medium text-xs sm:text-xs text-muted-foreground uppercase tracking-wide">
              {role.title}
            </h4>
            {role.team && (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5 sm:gap-2 pb-2">
                {role.team.map((member, memberIndex) => (
                  <Badge
                    key={memberIndex}
                    variant="secondary"
                    className="justify-center p-1.5 sm:p-2 text-xs h-[70px] sm:h-[80px] w-full flex items-center"
                  >
                    <span className="text-center text-[11px] sm:text-[11px] leading-tight whitespace-normal break-words px-1">
                      {member.name}
                    </span>
                  </Badge>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </CardContent>
  </Card>
);

export default function OrganizationalChart() {
  const leadership = [
    { name: "Chairman", isLead: true },
    { name: "Business Director", isLead: true },
    { name: "Chief Executive Officer (CEO)", isLead: true },
    { name: "Chief Financial Officer (CFO)", isLead: true },
  ];

  const departments = [
    {
      title: "R&D + Innovation Department",
      icon: Lightbulb,
      color: "bg-primary",
      roles: [
        {
          title: "Innovation Team",
          team: [
            { name: "Design Research Lead", isLead: true },
            { name: "Sustainability Consultant" },
            { name: "Green Building Specialist" },
            { name: "Material Innovation Analyst" },
          ],
        },
      ],
    },
    {
      title: "Design & Architecture Department",
      icon: Ruler,
      color: "bg-primary",
      roles: [
        {
          title: "Architecture Team",
          team: [
            { name: "Chief Architect", isLead: true },
            { name: "Lead Architect", isLead: true },
            { name: "Associate Architects" },
            { name: "Junior Architects" },
            { name: "BIM Specialist" },
            { name: "3D Visualizer" },
          ],
        },
        {
          title: "Interior Design Team",
          team: [
            { name: "Lead Interior Designer", isLead: true },
            { name: "Senior Interior Designer" },
            { name: "Material & Finish Coordinator" },
            { name: "FF&E Designer" },
          ],
        },
      ],
    },
    {
      title: "Engineering Department",
      icon: Wrench,
      color: "bg-primary",
      roles: [
        {
          title: "Structural Engineering Team",
          team: [
            { name: "Chief Structural Engineer", isLead: true },
            { name: "RCC Designer" },
            { name: "Steel Structure Expert" },
            { name: "Seismic Analyst" },
          ],
        },
        {
          title: "Civil Engineering Team",
          team: [
            { name: "Senior Civil Engineer", isLead: true },
            { name: "Site Engineer" },
            { name: "Quantity Surveyor" },
          ],
        },
        {
          title: "MEP Team",
          team: [
            { name: "HVAC Engineer" },
            { name: "Plumbing Engineer" },
            { name: "Electrical Engineer" },
            { name: "Fire Safety Engineer" },
          ],
        },
        {
          title: "Acoustics & Lighting",
          team: [
            { name: "Acoustician" },
            { name: "Lighting Designer" },
            { name: "Smart Systems Consultant" },
          ],
        },
      ],
    },
    {
      title: "Project Department",
      icon: FolderOpen,
      color: "bg-primary",
      roles: [
        {
          title: "Project Management Team",
          team: [
            { name: "Head of Projects", isLead: true },
            { name: "Project Managers" },
            { name: "Construction Manager" },
            { name: "Site Supervisors" },
            { name: "Project Scheduler / Planner" },
            { name: "QA/ QC Officer" },
            { name: "Safety Officer" },
          ],
        },
      ],
    },
    {
      title: "IT Department",
      icon: Computer,
      color: "bg-primary",
      roles: [
        {
          title: "IT Team",
          team: [
            { name: "IT Manager", isLead: true },
            { name: "Software Developer" },
            { name: "Network & System Admin" },
            { name: "Data Analyst" },
            { name: "Technical Support Staff" },
          ],
        },
        {
          title: "Digital Marketing Team",
          team: [
            {
              name: "Digital Marketing Strategist",
              isLead: true,
            },
            { name: "Social Media Manager" },
            { name: "Content Creator" },
            { name: "Graphic Designer" },
            { name: "SEO Specialist" },
            { name: "Paid Ads Specialist" },
          ],
        },
      ],
    },
    {
      title: "Business Operations Department",
      icon: Briefcase,
      color: "bg-primary",
      roles: [
        {
          title: "Human Resources (HR)",
          team: [
            { name: "HR Manager", isLead: true },
            { name: "Recruiter" },
            { name: "Training & Development Officer" },
          ],
        },
        {
          title: "Finance & Legal",
          team: [
            { name: "Senior Accountant" },
            { name: "Junior Accountant" },
            { name: "Billing / Tax Officer" },
            { name: "Legal Advisor" },
            { name: "Contract Administrator" },
          ],
        },
        {
          title: "Procurement & Logistics",
          team: [
            { name: "Procurement Manager", isLead: true },
            { name: "Vendor Coordinator" },
            { name: "Inventory Officer" },
            { name: "Site Logistics Supervisor" },
          ],
        },
        {
          title: "Client Relations & Public Affairs",
          team: [
            { name: "Client Liaison Officer" },
            { name: "Public Relations Executive" },
            { name: "Proposal Writer / Bid Manager" },
          ],
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background p-2 sm:p-4 md:p-6 lg:p-8">
      <div className="mx-4 sm:mx-8 md:mx-16 lg:mx-24 xl:mx-[120px] space-y-6 sm:space-y-8">
        {/* Header */}
        <div className="text-center space-y-3 sm:space-y-4">
          <div className="flex items-center justify-center gap-2 sm:gap-3">
            <Building2 className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
            <h1 className="text-2xl sm:text-2xl lg:text-3xl font-medium">
              RG Creations Nepal
            </h1>
          </div>
          <p className="text-muted-foreground text-base sm:text-base">
            Organizational Structure
          </p>
        </div>

        {/* Leadership Section */}
        <Card className="w-full border-2 border-primary/20">
          <CardHeader className="text-center pb-3 sm:pb-4">
            <div className="flex items-center justify-center gap-2 sm:gap-3">
              <div className="p-1.5 sm:p-2 rounded-lg bg-primary">
                <Users className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
              </div>
              <CardTitle className="text-lg sm:text-xl font-medium">
                Leadership & Strategy
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 sm:space-y-4">
              {/* Chairman - Centered in first row */}
              <div className="flex justify-center">
                <Badge
                  variant="default"
                  className="p-2 text-xs sm:text-xs justify-center bg-primary text-primary-foreground font-medium h-[60px] sm:h-[70px] w-full max-w-xs flex items-center"
                >
                  <span className="text-center leading-tight whitespace-normal break-words">
                    {leadership[0].name}
                  </span>
                </Badge>
              </div>
              
              {/* Other leadership roles - Grid in second row */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3">
                {leadership.slice(1).map((leader, index) => (
                  <Badge
                    key={index + 1}
                    variant="default"
                    className="p-2 text-xs sm:text-xs justify-center bg-primary text-primary-foreground font-medium h-[60px] sm:h-[70px] w-full flex items-center"
                  >
                    <span className="text-center leading-tight whitespace-normal break-words">
                      {leader.name}
                    </span>
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        <Separator />

        {/* Departments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {departments.map((department, index) => (
            <DepartmentCard
              key={index}
              title={department.title}
              icon={department.icon}
              color={department.color}
              roles={department.roles}
            />
          ))}
        </div>

        {/* Footer */}
        <div className="text-center text-xs sm:text-xs text-muted-foreground pt-6 sm:pt-8">
          <p>
            Total Organization Structure -{" "}
            {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </div>
  );
}