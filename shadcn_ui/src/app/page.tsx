"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { 
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { 
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { 
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { 
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { 
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { 
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { 
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { 
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { 
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/toggle-group";
import { 
  AspectRatio,
} from "@/components/ui/aspect-ratio";
import { 
  Calendar,
} from "@/components/ui/calendar";
import { 
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { 
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { 
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";
import { ThemeToggle } from "@/components/theme-toggle";
import { useState } from "react";
import { 
  LineChart, 
  Line, 
  BarChart, 
  Bar, 
  PieChart, 
  Pie, 
  Cell, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip as RechartsTooltip, 
  ResponsiveContainer 
} from "recharts";

export default function Home() {
  const [progress, setProgress] = useState(33);
  const [sliderValue, setSliderValue] = useState([50]);
  const [otpValue, setOtpValue] = useState("");
  const [comboboxValue, setComboboxValue] = useState("");
  const [tableFilter, setTableFilter] = useState("");
  const [tableSort, setTableSort] = useState({ field: 'name', direction: 'asc' as 'asc' | 'desc' });
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [dateRange, setDateRange] = useState<{ from: Date | undefined; to: Date | undefined }>({
    from: undefined,
    to: undefined,
  });
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const frameworks = [
    { value: "next.js", label: "Next.js" },
    { value: "sveltekit", label: "SvelteKit" },
    { value: "nuxt.js", label: "Nuxt.js" },
    { value: "remix", label: "Remix" },
    { value: "astro", label: "Astro" },
    { value: "wordpress", label: "WordPress" },
    { value: "express.js", label: "Express.js" },
  ];

  const tableData = [
    { id: 1, name: "John Doe", email: "john@example.com", status: "Active", role: "Admin" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", status: "Inactive", role: "User" },
    { id: 3, name: "Bob Johnson", email: "bob@example.com", status: "Active", role: "User" },
    { id: 4, name: "Alice Brown", email: "alice@example.com", status: "Active", role: "Moderator" },
    { id: 5, name: "Charlie Wilson", email: "charlie@example.com", status: "Inactive", role: "User" },
    { id: 6, name: "Diana Davis", email: "diana@example.com", status: "Active", role: "Admin" },
  ];

  return (
    <TooltipProvider>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
        <div className="container mx-auto px-4 py-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex justify-between items-center mb-8">
              <div></div>
              <ThemeToggle />
            </div>
            <h1 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
              shadcn/ui Components Showroom
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Khám phá bộ sưu tập các component đẹp và hiện đại từ thư viện shadcn/ui
            </p>
          </div>

          {/* Components Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Button Component */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span>Button</span>
                  <Badge variant="secondary">Interactive</Badge>
                </CardTitle>
                <CardDescription>
                  Các loại button với nhiều variant và size khác nhau
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  <Button>Default</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="destructive">Destructive</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="link">Link</Button>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">Info</Button>
                  <Button className="bg-yellow-600 hover:bg-yellow-700 text-white">Warning</Button>
                  <Button className="bg-green-600 hover:bg-green-700 text-white">Success</Button>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Button size="sm">Small</Button>
                  <Button size="default">Default</Button>
                  <Button size="lg">Large</Button>
                </div>
              </CardContent>
            </Card>

            {/* Input & Form Components */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span>Form Elements</span>
                  <Badge variant="secondary">Form</Badge>
                </CardTitle>
                <CardDescription>
                  Các component input và form elements
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Enter your email" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Type your message here..." />
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" />
                  <Label htmlFor="terms">Accept terms and conditions</Label>
                </div>
              </CardContent>
            </Card>

            {/* Badge Component */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span>Badge</span>
                  <Badge variant="secondary">Display</Badge>
                </CardTitle>
                <CardDescription>
                  Các loại badge để hiển thị trạng thái
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge>Default</Badge>
                  <Badge variant="secondary">Secondary</Badge>
                  <Badge variant="destructive">Destructive</Badge>
                  <Badge variant="outline">Outline</Badge>
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200 dark:bg-blue-900 dark:text-blue-300">Info</Badge>
                  <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-200 dark:bg-yellow-900 dark:text-yellow-300">Warning</Badge>
                  <Badge className="bg-green-100 text-green-800 hover:bg-green-200 dark:bg-green-900 dark:text-green-300">Success</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Avatar Component */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span>Avatar</span>
                  <Badge variant="secondary">Display</Badge>
                </CardTitle>
                <CardDescription>
                  Component hiển thị avatar người dùng
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4">
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <Avatar>
                    <AvatarFallback>AB</AvatarFallback>
                  </Avatar>
                  <Avatar>
                    <AvatarFallback>CD</AvatarFallback>
                  </Avatar>
                </div>
              </CardContent>
            </Card>

            {/* Alert Component */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span>Alert</span>
                  <Badge variant="destructive">Warning</Badge>
                </CardTitle>
                <CardDescription>
                  Các loại alert để thông báo
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Alert>
                  <AlertTitle>Heads up!</AlertTitle>
                  <AlertDescription>
                    You can add components to your app using the cli.
                  </AlertDescription>
                </Alert>
                <Alert variant="destructive">
                  <AlertTitle>Error</AlertTitle>
                  <AlertDescription>
                    Your session has expired. Please log in again.
                  </AlertDescription>
                </Alert>
                <Alert className="border-blue-200 bg-blue-50 text-blue-900 dark:border-blue-800 dark:bg-blue-950 dark:text-blue-100">
                  <AlertTitle>Info</AlertTitle>
                  <AlertDescription>
                    This is an informational message with additional details.
                  </AlertDescription>
                </Alert>
                <Alert className="border-yellow-200 bg-yellow-50 text-yellow-900 dark:border-yellow-800 dark:bg-yellow-950 dark:text-yellow-100">
                  <AlertTitle>Warning</AlertTitle>
                  <AlertDescription>
                    Please review your changes before proceeding.
                  </AlertDescription>
                </Alert>
                <Alert className="border-green-200 bg-green-50 text-green-900 dark:border-green-800 dark:bg-green-950 dark:text-green-100">
                  <AlertTitle>Success</AlertTitle>
                  <AlertDescription>
                    Your changes have been saved successfully.
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>

            {/* Progress & Slider */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span>Progress & Slider</span>
                  <Badge variant="secondary">Interactive</Badge>
                </CardTitle>
                <CardDescription>
                  Progress bar và slider controls
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Progress: {progress}%</Label>
                  <Progress value={progress} className="w-full" />
                  <Button 
                    size="sm" 
                    onClick={() => setProgress(Math.min(100, progress + 10))}
                  >
                    Increase
                  </Button>
                </div>
                <div className="space-y-2">
                  <Label>Slider: {sliderValue[0]}</Label>
                  <Slider
                    value={sliderValue}
                    onValueChange={setSliderValue}
                    max={100}
                    step={1}
                    className="w-full"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Radio Group */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span>Radio Group</span>
                  <Badge variant="secondary">Form</Badge>
                </CardTitle>
                <CardDescription>
                  Radio button selection
                </CardDescription>
              </CardHeader>
              <CardContent>
                <RadioGroup defaultValue="option1">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="option1" id="r1" />
                    <Label htmlFor="r1">Option 1</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="option2" id="r2" />
                    <Label htmlFor="r2">Option 2</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="option3" id="r3" />
                    <Label htmlFor="r3">Option 3</Label>
                  </div>
                </RadioGroup>
              </CardContent>
            </Card>

            {/* Switch */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span>Switch</span>
                  <Badge variant="secondary">Toggle</Badge>
                </CardTitle>
                <CardDescription>
                  Toggle switch component
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Switch id="airplane-mode" />
                  <Label htmlFor="airplane-mode">Airplane Mode</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch id="notifications" defaultChecked />
                  <Label htmlFor="notifications">Notifications</Label>
                </div>
              </CardContent>
            </Card>

            {/* Tabs */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span>Tabs</span>
                  <Badge variant="secondary">Navigation</Badge>
                </CardTitle>
                <CardDescription>
                  Tab navigation component
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="account" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="account">Account</TabsTrigger>
                    <TabsTrigger value="password">Password</TabsTrigger>
                  </TabsList>
                  <TabsContent value="account" className="mt-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" defaultValue="Pedro Duarte" />
                    </div>
                  </TabsContent>
                  <TabsContent value="password" className="mt-4">
                    <div className="space-y-2">
                      <Label htmlFor="current">Current password</Label>
                      <Input id="current" type="password" />
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            {/* Accordion */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span>Accordion</span>
                  <Badge variant="secondary">Collapsible</Badge>
                </CardTitle>
                <CardDescription>
                  Collapsible content sections
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Is it accessible?</AccordionTrigger>
                    <AccordionContent>
                      Yes. It adheres to the WAI-ARIA design pattern.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>Is it styled?</AccordionTrigger>
                    <AccordionContent>
                      Yes. It comes with default styles that matches the other components.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>

            {/* Table */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span>Table</span>
                  <Badge variant="secondary">Data</Badge>
                </CardTitle>
                <CardDescription>
                  Data table component
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Email</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>John Doe</TableCell>
                      <TableCell><Badge>Active</Badge></TableCell>
                      <TableCell>john@example.com</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Jane Smith</TableCell>
                      <TableCell><Badge variant="secondary">Inactive</Badge></TableCell>
                      <TableCell>jane@example.com</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            {/* Tooltip */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span>Tooltip</span>
                  <Badge variant="secondary">Overlay</Badge>
                </CardTitle>
                <CardDescription>
                  Hover tooltip component
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="outline">Hover me</Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>This is a tooltip</p>
                    </TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="outline">Another tooltip</Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Another tooltip content</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
              </CardContent>
            </Card>

            {/* Hover Card */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span>Hover Card</span>
                  <Badge variant="secondary">Overlay</Badge>
                </CardTitle>
                <CardDescription>
                  Rich hover card component
                </CardDescription>
              </CardHeader>
              <CardContent>
                <HoverCard>
                  <HoverCardTrigger asChild>
                    <Button variant="link">@nextjs</Button>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-80">
                    <div className="flex justify-between space-x-4">
                      <Avatar>
                        <AvatarImage src="https://github.com/vercel.png" />
                        <AvatarFallback>VC</AvatarFallback>
                      </Avatar>
                      <div className="space-y-1">
                        <h4 className="text-sm font-semibold">@nextjs</h4>
                        <p className="text-sm">
                          The React Framework – created and maintained by @vercel.
                        </p>
                        <div className="flex items-center pt-2">
                          <span className="text-xs text-muted-foreground">
                            Joined December 2021
                          </span>
                        </div>
                      </div>
                    </div>
                  </HoverCardContent>
                </HoverCard>
              </CardContent>
            </Card>

            {/* Popover */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span>Popover</span>
                  <Badge variant="secondary">Overlay</Badge>
                </CardTitle>
                <CardDescription>
                  Popover overlay component
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline">Open popover</Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-80">
                    <div className="grid gap-4">
                      <div className="space-y-2">
                        <h4 className="font-medium leading-none">Dimensions</h4>
                        <p className="text-sm text-muted-foreground">
                          Set the dimensions for the layer.
                        </p>
                      </div>
                      <div className="grid gap-2">
                        <div className="grid grid-cols-3 items-center gap-4">
                          <Label htmlFor="width">Width</Label>
                          <Input
                            id="width"
                            defaultValue="100%"
                            className="col-span-2 h-8"
                          />
                        </div>
                        <div className="grid grid-cols-3 items-center gap-4">
                          <Label htmlFor="maxWidth">Max. width</Label>
                          <Input
                            id="maxWidth"
                            defaultValue="300px"
                            className="col-span-2 h-8"
                          />
                        </div>
                      </div>
                    </div>
                  </PopoverContent>
                </Popover>
              </CardContent>
            </Card>

            {/* Sheet */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span>Sheet</span>
                  <Badge variant="secondary">Overlay</Badge>
                </CardTitle>
                <CardDescription>
                  Resizable side sheet component
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="outline">Open Resizable Sheet</Button>
                  </SheetTrigger>
                  <SheetContent className="w-[400px] sm:w-[540px]">
                    <SheetHeader>
                      <SheetTitle>Edit profile</SheetTitle>
                      <SheetDescription>
                        Make changes to your profile here. Click save when you&apos;re done.
                      </SheetDescription>
                    </SheetHeader>
                    <div className="grid gap-4 py-4">
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                          Name
                        </Label>
                        <Input id="name" defaultValue="Pedro Duarte" className="col-span-3" />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="username" className="text-right">
                          Username
                        </Label>
                        <Input id="username" defaultValue="@peduarte" className="col-span-3" />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="email" className="text-right">
                          Email
                        </Label>
                        <Input id="email" defaultValue="pedro@example.com" className="col-span-3" />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="bio" className="text-right">
                          Bio
                        </Label>
                        <Textarea id="bio" defaultValue="I'm a developer who loves building great products." className="col-span-3" />
                      </div>
                    </div>
                    <div className="flex justify-end gap-2">
                      <Button variant="outline">Cancel</Button>
                      <Button>Save Changes</Button>
                    </div>
                  </SheetContent>
                </Sheet>
              </CardContent>
            </Card>

            {/* Skeleton */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span>Skeleton</span>
                  <Badge variant="secondary">Loading</Badge>
                </CardTitle>
                <CardDescription>
                  Loading skeleton component
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Skeleton className="h-12 w-12 rounded-full" />
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-[250px]" />
                    <Skeleton className="h-4 w-[200px]" />
                  </div>
                </div>
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-3/4" />
              </CardContent>
            </Card>

            {/* Separator */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span>Separator</span>
                  <Badge variant="secondary">Layout</Badge>
                </CardTitle>
                <CardDescription>
                  Visual separator component
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="space-y-1">
                    <h4 className="text-sm font-medium leading-none">Radix Primitives</h4>
                    <p className="text-sm text-muted-foreground">
                      An open-source UI component library.
                    </p>
                  </div>
                  <Separator className="my-4" />
                  <div className="flex h-5 items-center space-x-4 text-sm">
                    <div>Blog</div>
                    <Separator orientation="vertical" />
                    <div>Docs</div>
                    <Separator orientation="vertical" />
                    <div>Source</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Interactive Demo - Large Card */}
            <Card className="hover:shadow-lg transition-shadow md:col-span-2 lg:col-span-3">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span>Interactive Demo</span>
                  <Badge variant="secondary">Live</Badge>
                </CardTitle>
                <CardDescription>
                  Kết hợp nhiều component trong một form thực tế
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="profile" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="profile">Profile</TabsTrigger>
                    <TabsTrigger value="settings">Settings</TabsTrigger>
                    <TabsTrigger value="preferences">Preferences</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="profile" className="mt-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name</Label>
                          <Input id="name" placeholder="John Doe" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email-demo">Email</Label>
                          <Input id="email-demo" type="email" placeholder="john@example.com" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="bio">Bio</Label>
                          <Textarea id="bio" placeholder="Tell us about yourself..." />
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="newsletter" />
                          <Label htmlFor="newsletter">Subscribe to newsletter</Label>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label>Avatar</Label>
                          <div className="flex items-center gap-4">
                            <Avatar className="h-16 w-16">
                              <AvatarImage src="https://github.com/shadcn.png" />
                              <AvatarFallback>JD</AvatarFallback>
                            </Avatar>
                            <Button variant="outline" size="sm">Change</Button>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label>Status</Label>
                          <div className="flex gap-2">
                            <Badge>Active</Badge>
                            <Badge variant="secondary">Premium</Badge>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label>Notifications</Label>
                          <div className="space-y-2">
                            <div className="flex items-center space-x-2">
                              <Switch id="email-notifications" defaultChecked />
                              <Label htmlFor="email-notifications">Email notifications</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Switch id="push-notifications" />
                              <Label htmlFor="push-notifications">Push notifications</Label>
                            </div>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button>Save Changes</Button>
                          <Button variant="outline">Cancel</Button>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="settings" className="mt-6">
                    <div className="space-y-4">
                      <Alert>
                        <AlertTitle>Security Settings</AlertTitle>
                        <AlertDescription>
                          Manage your account security and privacy settings.
                        </AlertDescription>
                      </Alert>
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label>Two-factor authentication</Label>
                          <div className="flex items-center space-x-2">
                            <Switch id="2fa" />
                            <Label htmlFor="2fa">Enable 2FA</Label>
                          </div>
                        </div>
                        <Separator />
                        <div className="space-y-2">
                          <Label>Session timeout</Label>
                          <Slider
                            value={[30]}
                            max={120}
                            min={5}
                            step={5}
                            className="w-full"
                          />
                          <p className="text-sm text-muted-foreground">30 minutes</p>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="preferences" className="mt-6">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label>Theme</Label>
                        <RadioGroup defaultValue="system">
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="light" id="light" />
                            <Label htmlFor="light">Light</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="dark" id="dark" />
                            <Label htmlFor="dark">Dark</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="system" id="system" />
                            <Label htmlFor="system">System</Label>
                          </div>
                        </RadioGroup>
                      </div>
                      <Separator />
                      <div className="space-y-2">
                        <Label>Language</Label>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="outline" className="w-full justify-between">
                              English
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent>
                            <DropdownMenuItem>English</DropdownMenuItem>
                            <DropdownMenuItem>Tiếng Việt</DropdownMenuItem>
                            <DropdownMenuItem>中文</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            {/* Breadcrumb Component */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span>Breadcrumb</span>
                  <Badge variant="secondary">Navigation</Badge>
                </CardTitle>
                <CardDescription>
                  Navigation breadcrumb component
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Breadcrumb>
                  <BreadcrumbList>
                    <BreadcrumbItem>
                      <BreadcrumbLink href="/">Home</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      <BreadcrumbPage>Components</BreadcrumbPage>
                    </BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>
              </CardContent>
            </Card>

            {/* Carousel Component */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span>Carousel</span>
                  <Badge variant="secondary">Media</Badge>
                </CardTitle>
                <CardDescription>
                  Image/content carousel component
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Carousel className="w-full max-w-xs">
                  <CarouselContent>
                    <CarouselItem>
                      <div className="p-1">
                        <Card>
                          <CardContent className="flex aspect-square items-center justify-center p-6">
                            <span className="text-4xl font-semibold">1</span>
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                    <CarouselItem>
                      <div className="p-1">
                        <Card>
                          <CardContent className="flex aspect-square items-center justify-center p-6">
                            <span className="text-4xl font-semibold">2</span>
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                    <CarouselItem>
                      <div className="p-1">
                        <Card>
                          <CardContent className="flex aspect-square items-center justify-center p-6">
                            <span className="text-4xl font-semibold">3</span>
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </CardContent>
            </Card>

            {/* Drawer Component */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span>Drawer</span>
                  <Badge variant="secondary">Overlay</Badge>
                </CardTitle>
                <CardDescription>
                  Mobile-friendly drawer component
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Drawer>
                  <DrawerTrigger asChild>
                    <Button variant="outline">Open Drawer</Button>
                  </DrawerTrigger>
                  <DrawerContent>
                    <div className="mx-auto w-full max-w-sm">
                      <DrawerHeader>
                        <DrawerTitle>Are you absolutely sure?</DrawerTitle>
                        <DrawerDescription>This action cannot be undone.</DrawerDescription>
                      </DrawerHeader>
                      <div className="p-4 pb-0">
                        <div className="flex items-center justify-center space-x-2">
                          <div className="flex-1 text-center">
                            <div className="text-7xl font-bold tracking-tighter">
                              100
                            </div>
                            <div className="text-[0.70rem] uppercase text-muted-foreground">
                              Calories
                            </div>
                          </div>
                        </div>
                      </div>
                      <DrawerFooter className="pt-2">
                        <Button>Submit</Button>
                        <DrawerClose asChild>
                          <Button variant="outline">Cancel</Button>
                        </DrawerClose>
                      </DrawerFooter>
                    </div>
                  </DrawerContent>
                </Drawer>
              </CardContent>
            </Card>

            {/* Input OTP Component */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span>Input OTP</span>
                  <Badge variant="secondary">Form</Badge>
                </CardTitle>
                <CardDescription>
                  One-time password input component
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Label>Enter verification code</Label>
                  <InputOTP
                    maxLength={6}
                    value={otpValue}
                    onChange={setOtpValue}
                  >
                    <InputOTPGroup>
                      <InputOTPSlot index={0} />
                      <InputOTPSlot index={1} />
                      <InputOTPSlot index={2} />
                      <InputOTPSlot index={3} />
                      <InputOTPSlot index={4} />
                      <InputOTPSlot index={5} />
                    </InputOTPGroup>
                  </InputOTP>
                  <p className="text-sm text-muted-foreground">
                    Code: {otpValue}
                  </p>
        </div>
              </CardContent>
            </Card>

            {/* Menubar Component */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span>Menubar</span>
                  <Badge variant="secondary">Navigation</Badge>
                </CardTitle>
                <CardDescription>
                  Desktop-style menubar component
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Menubar>
                  <MenubarMenu>
                    <MenubarTrigger>File</MenubarTrigger>
                    <MenubarContent>
                      <MenubarItem>New Tab</MenubarItem>
                      <MenubarItem>New Window</MenubarItem>
                      <MenubarSeparator />
                      <MenubarItem>Share</MenubarItem>
                      <MenubarSeparator />
                      <MenubarItem>Print</MenubarItem>
                    </MenubarContent>
                  </MenubarMenu>
                  <MenubarMenu>
                    <MenubarTrigger>Edit</MenubarTrigger>
                    <MenubarContent>
                      <MenubarItem>Undo</MenubarItem>
                      <MenubarItem>Redo</MenubarItem>
                      <MenubarSeparator />
                      <MenubarItem>Cut</MenubarItem>
                      <MenubarItem>Copy</MenubarItem>
                      <MenubarItem>Paste</MenubarItem>
                    </MenubarContent>
                  </MenubarMenu>
                </Menubar>
              </CardContent>
            </Card>

            {/* Navigation Menu Component */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span>Navigation Menu</span>
                  <Badge variant="secondary">Navigation</Badge>
                </CardTitle>
                <CardDescription>
                  Complex navigation menu component
                </CardDescription>
              </CardHeader>
              <CardContent>
                <NavigationMenu>
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                          <li className="row-span-3">
                            <NavigationMenuLink asChild>
                              <a
                                className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                href="/"
                              >
                                <div className="mb-2 mt-4 text-lg font-medium">
                                  shadcn/ui
                                </div>
                                <p className="text-sm leading-tight text-muted-foreground">
                                  Beautifully designed components built with Radix UI and Tailwind CSS.
                                </p>
                              </a>
                            </NavigationMenuLink>
                          </li>
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
              </CardContent>
            </Card>

            {/* Pagination Component */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span>Pagination</span>
                  <Badge variant="secondary">Navigation</Badge>
                </CardTitle>
                <CardDescription>
                  Pagination navigation component
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious href="#" />
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#" isActive>
                        2
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">3</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationEllipsis />
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationNext href="#" />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </CardContent>
            </Card>

            {/* Resizable Component */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span>Resizable</span>
                  <Badge variant="secondary">Layout</Badge>
                </CardTitle>
                <CardDescription>
                  Resizable panel component
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ResizablePanelGroup
                  direction="horizontal"
                  className="max-w-md rounded-lg border"
                >
                  <ResizablePanel defaultSize={50}>
                    <div className="flex h-[200px] items-center justify-center p-6">
                      <span className="font-semibold">One</span>
        </div>
                  </ResizablePanel>
                  <ResizableHandle />
                  <ResizablePanel defaultSize={50}>
                    <div className="flex h-[200px] items-center justify-center p-6">
                      <span className="font-semibold">Two</span>
                    </div>
                  </ResizablePanel>
                </ResizablePanelGroup>
              </CardContent>
            </Card>

            {/* Scroll Area Component */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span>Scroll Area</span>
                  <Badge variant="secondary">Layout</Badge>
                </CardTitle>
                <CardDescription>
                  Custom scrollable area component
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[200px] w-full rounded-md border p-4">
                  <div className="space-y-2">
                    {Array.from({ length: 20 }).map((_, i) => (
                      <div key={i} className="text-sm">
                        Item {i + 1} - This is a scrollable content area.
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>

            {/* Select Component */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span>Select</span>
                  <Badge variant="secondary">Form</Badge>
                </CardTitle>
                <CardDescription>
                  Select dropdown component
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select a fruit" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="apple">Apple</SelectItem>
                    <SelectItem value="banana">Banana</SelectItem>
                    <SelectItem value="blueberry">Blueberry</SelectItem>
                    <SelectItem value="grapes">Grapes</SelectItem>
                    <SelectItem value="pineapple">Pineapple</SelectItem>
                  </SelectContent>
                </Select>
              </CardContent>
            </Card>

            {/* Toggle Group Component */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span>Toggle Group</span>
                  <Badge variant="secondary">Interactive</Badge>
                </CardTitle>
                <CardDescription>
                  Toggle group selection component
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <ToggleGroup type="single">
                    <ToggleGroupItem value="bold">Bold</ToggleGroupItem>
                    <ToggleGroupItem value="italic">Italic</ToggleGroupItem>
                    <ToggleGroupItem value="underline">Underline</ToggleGroupItem>
                  </ToggleGroup>
                  <ToggleGroup type="multiple">
                    <ToggleGroupItem value="bold">Bold</ToggleGroupItem>
                    <ToggleGroupItem value="italic">Italic</ToggleGroupItem>
                    <ToggleGroupItem value="underline">Underline</ToggleGroupItem>
                  </ToggleGroup>
                </div>
              </CardContent>
            </Card>

            {/* Aspect Ratio Component */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span>Aspect Ratio</span>
                  <Badge variant="secondary">Layout</Badge>
                </CardTitle>
                <CardDescription>
                  Responsive aspect ratio component
                </CardDescription>
              </CardHeader>
              <CardContent>
                <AspectRatio ratio={16 / 9} className="bg-muted rounded-md">
                  <div className="flex items-center justify-center h-full">
                    <span className="text-2xl font-semibold">16:9</span>
                  </div>
                </AspectRatio>
              </CardContent>
            </Card>

            {/* Calendar Component */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span>Calendar</span>
                  <Badge variant="secondary">Date</Badge>
                </CardTitle>
                <CardDescription>
                  Date picker calendar component
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Calendar
                  mode="single"
                  className="rounded-md border"
                />
              </CardContent>
            </Card>

            {/* Collapsible Component */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span>Collapsible</span>
                  <Badge variant="secondary">Layout</Badge>
                </CardTitle>
                <CardDescription>
                  Collapsible content component
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Collapsible>
                  <CollapsibleTrigger asChild>
                    <Button variant="outline" className="w-full justify-between">
                      @peduarte starred 3 repositories
                      <span className="text-sm text-muted-foreground">Click to expand</span>
                    </Button>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="space-y-2 mt-2">
                    <div className="rounded-md border px-4 py-3 font-mono text-sm">
                      @radix-ui/primitives
                    </div>
                    <div className="rounded-md border px-4 py-3 font-mono text-sm">
                      @radix-ui/colors
                    </div>
                    <div className="rounded-md border px-4 py-3 font-mono text-sm">
                      @stitches/react
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </CardContent>
            </Card>

            {/* Command Component */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span>Command</span>
                  <Badge variant="secondary">Search</Badge>
                </CardTitle>
                <CardDescription>
                  Command palette component
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Command className="rounded-lg border shadow-md">
                  <CommandInput placeholder="Type a command or search..." />
                  <CommandList>
                    <CommandEmpty>No results found.</CommandEmpty>
                    <CommandGroup heading="Suggestions">
                      <CommandItem>
                        <span>Calendar</span>
                      </CommandItem>
                      <CommandItem>
                        <span>Search Emoji</span>
                      </CommandItem>
                      <CommandItem>
                        <span>Calculator</span>
                      </CommandItem>
                    </CommandGroup>
                  </CommandList>
                </Command>
              </CardContent>
            </Card>

            {/* Context Menu Component */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span>Context Menu</span>
                  <Badge variant="secondary">Menu</Badge>
                </CardTitle>
                <CardDescription>
                  Right-click context menu component
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ContextMenu>
                  <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
                    Right click here
                  </ContextMenuTrigger>
                  <ContextMenuContent className="w-64">
                    <ContextMenuItem inset>
                      Back
                    </ContextMenuItem>
                    <ContextMenuItem inset>
                      Forward
                    </ContextMenuItem>
                    <ContextMenuItem inset>
                      Reload
                    </ContextMenuItem>
                  </ContextMenuContent>
                </ContextMenu>
              </CardContent>
            </Card>

            {/* Toast Demo */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span>Toast (Sonner)</span>
                  <Badge variant="secondary">Notification</Badge>
                </CardTitle>
                <CardDescription>
                  Toast notification component
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Button
                    onClick={() => toast("Event has been created")}
                  >
                    Show Toast
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => toast("Event has been created", {
                      description: "Monday, January 3rd at 6:00pm",
                    })}
                  >
                    Show Toast with Description
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Chart Component */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span>Chart</span>
                  <Badge variant="secondary">Data</Badge>
                </CardTitle>
                <CardDescription>
                  Data visualization charts using Recharts
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {/* Line Chart */}
                  <div>
                    <h4 className="text-sm font-medium mb-2">Line Chart</h4>
                    <ResponsiveContainer width="100%" height={200}>
                      <LineChart data={[
                        { name: 'Jan', value: 400 },
                        { name: 'Feb', value: 300 },
                        { name: 'Mar', value: 200 },
                        { name: 'Apr', value: 278 },
                        { name: 'May', value: 189 },
                        { name: 'Jun', value: 239 }
                      ]}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <RechartsTooltip />
                        <Line type="monotone" dataKey="value" stroke="#8884d8" strokeWidth={2} />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                  
                  {/* Bar Chart */}
                  <div>
                    <h4 className="text-sm font-medium mb-2">Bar Chart</h4>
                    <ResponsiveContainer width="100%" height={200}>
                      <BarChart data={[
                        { name: 'A', value: 400 },
                        { name: 'B', value: 300 },
                        { name: 'C', value: 200 },
                        { name: 'D', value: 278 }
                      ]}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <RechartsTooltip />
                        <Bar dataKey="value" fill="#82ca9d" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                  
                  {/* Pie Chart */}
                  <div>
                    <h4 className="text-sm font-medium mb-2">Pie Chart</h4>
                    <ResponsiveContainer width="100%" height={200}>
                      <PieChart>
                        <Pie
                          data={[
                            { name: 'Group A', value: 400 },
                            { name: 'Group B', value: 300 },
                            { name: 'Group C', value: 300 },
                            { name: 'Group D', value: 200 }
                          ]}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                        >
                          {[
                            { name: 'Group A', value: 400 },
                            { name: 'Group B', value: 300 },
                            { name: 'Group C', value: 300 },
                            { name: 'Group D', value: 200 }
                          ].map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={['#8884d8', '#82ca9d', '#ffc658', '#ff7300'][index % 4]} />
                          ))}
                        </Pie>
                        <RechartsTooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Combobox Component */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span>Combobox</span>
                  <Badge variant="secondary">Form</Badge>
                </CardTitle>
                <CardDescription>
                  Searchable select input with Command component
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label>Select a framework</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          role="combobox"
                          className="w-full justify-between"
                        >
                          {comboboxValue
                            ? frameworks.find((framework) => framework.value === comboboxValue)?.label
                            : "Select framework..."}
                          <svg
                            className="ml-2 h-4 w-4 shrink-0 opacity-50"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="m6 9 6 6 6-6" />
                          </svg>
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-full p-0">
                        <Command>
                          <CommandInput placeholder="Search framework..." />
                          <CommandList>
                            <CommandEmpty>No framework found.</CommandEmpty>
                            <CommandGroup>
                              {frameworks.map((framework) => (
                                <CommandItem
                                  key={framework.value}
                                  value={framework.value}
                                  onSelect={(currentValue) => {
                                    setComboboxValue(currentValue === comboboxValue ? "" : currentValue);
                                  }}
                                >
                                  <svg
                                    className="mr-2 h-4 w-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  >
                                    <polyline points="20,6 9,17 4,12" />
                                  </svg>
                                  {framework.label}
                                </CommandItem>
                              ))}
                            </CommandGroup>
                          </CommandList>
                        </Command>
                      </PopoverContent>
                    </Popover>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Selected: {comboboxValue || "None"}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Data Table Component */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span>Data Table</span>
                  <Badge variant="secondary">Data</Badge>
                </CardTitle>
                <CardDescription>
                  Advanced data table with sorting and filtering
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Input
                        placeholder="Filter by name..."
                        value={tableFilter}
                        onChange={(e) => setTableFilter(e.target.value)}
                        className="max-w-sm"
                      />
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setTableSort({ field: 'name', direction: tableSort.direction === 'asc' ? 'desc' : 'asc' })}
                      >
                        Sort by Name
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setTableSort({ field: 'status', direction: tableSort.direction === 'asc' ? 'desc' : 'asc' })}
                      >
                        Sort by Status
                      </Button>
                    </div>
                  </div>
                  <div className="rounded-md border">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Name</TableHead>
                          <TableHead>Email</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead>Role</TableHead>
                          <TableHead>Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {tableData
                          .filter((item) =>
                            item.name.toLowerCase().includes(tableFilter.toLowerCase())
                          )
                          .sort((a, b) => {
                            const field = tableSort.field as keyof typeof a;
                            const aVal = a[field];
                            const bVal = b[field];
                            if (tableSort.direction === 'asc') {
                              return aVal < bVal ? -1 : aVal > bVal ? 1 : 0;
                            } else {
                              return aVal > bVal ? -1 : aVal < bVal ? 1 : 0;
                            }
                          })
                          .map((item) => (
                            <TableRow key={item.id}>
                              <TableCell className="font-medium">{item.name}</TableCell>
                              <TableCell>{item.email}</TableCell>
                              <TableCell>
                                <Badge variant={item.status === 'Active' ? 'default' : 'secondary'}>
                                  {item.status}
                                </Badge>
                              </TableCell>
                              <TableCell>{item.role}</TableCell>
                              <TableCell>
                                <div className="flex space-x-2">
                                  <Button variant="outline" size="sm">Edit</Button>
                                  <Button variant="outline" size="sm">Delete</Button>
                                </div>
                              </TableCell>
                            </TableRow>
                          ))}
                      </TableBody>
                    </Table>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Showing {tableData.filter(item => item.name.toLowerCase().includes(tableFilter.toLowerCase())).length} of {tableData.length} entries
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Date Picker Component */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span>Date Picker</span>
                  <Badge variant="secondary">Form</Badge>
                </CardTitle>
                <CardDescription>
                  Date selection with calendar popup
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label>Select a date</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className="w-full justify-start text-left font-normal"
                        >
                          <svg
                            className="mr-2 h-4 w-4"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                            <line x1="16" x2="16" y1="2" y2="6" />
                            <line x1="8" x2="8" y1="2" y2="6" />
                            <line x1="3" x2="21" y1="10" y2="10" />
                          </svg>
                          {selectedDate ? selectedDate.toLocaleDateString() : "Pick a date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={selectedDate}
                          onSelect={setSelectedDate}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                  
                  <div className="space-y-2">
                    <Label>Date range</Label>
                    <div className="grid grid-cols-2 gap-2">
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className="w-full justify-start text-left font-normal"
                          >
                            <svg
                              className="mr-2 h-4 w-4"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                              <line x1="16" x2="16" y1="2" y2="6" />
                              <line x1="8" x2="8" y1="2" y2="6" />
                              <line x1="3" x2="21" y1="10" y2="10" />
                            </svg>
                            {dateRange.from ? dateRange.from.toLocaleDateString() : "From"}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={dateRange.from}
                            onSelect={(date) => setDateRange({ ...dateRange, from: date })}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                      
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className="w-full justify-start text-left font-normal"
                          >
                            <svg
                              className="mr-2 h-4 w-4"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                              <line x1="16" x2="16" y1="2" y2="6" />
                              <line x1="8" x2="8" y1="2" y2="6" />
                              <line x1="3" x2="21" y1="10" y2="10" />
                            </svg>
                            {dateRange.to ? dateRange.to.toLocaleDateString() : "To"}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={dateRange.to}
                            onSelect={(date) => setDateRange({ ...dateRange, to: date })}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                  </div>
                  
                  <div className="text-sm text-muted-foreground">
                    Selected: {selectedDate ? selectedDate.toLocaleDateString() : "None"}
                    {dateRange.from && dateRange.to && (
                      <span> | Range: {dateRange.from.toLocaleDateString()} - {dateRange.to.toLocaleDateString()}</span>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Sidebar Component */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span>Sidebar</span>
                  <Badge variant="secondary">Layout</Badge>
                </CardTitle>
                <CardDescription>
                  Collapsible sidebar navigation component
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setSidebarOpen(!sidebarOpen)}
                    >
                      {sidebarOpen ? "Close" : "Open"} Sidebar
                    </Button>
                  </div>
                  
                  <div className="relative">
                    <div className={`flex h-64 border rounded-lg overflow-hidden ${sidebarOpen ? 'bg-muted/50' : ''}`}>
                      {/* Sidebar */}
                      <div className={`bg-background border-r transition-all duration-300 ${
                        sidebarOpen ? 'w-64' : 'w-0'
                      } overflow-hidden`}>
                        <div className="p-4 space-y-4">
                          <div className="flex items-center space-x-2">
                            <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
                              <span className="text-primary-foreground text-sm font-bold">S</span>
                            </div>
                            <span className="font-semibold">Sidebar</span>
                          </div>
                          
                          <nav className="space-y-2">
                            <Button variant="ghost" className="w-full justify-start">
                              <svg className="mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                                <polyline points="9,22 9,12 15,12 15,22"/>
                              </svg>
                              Dashboard
                            </Button>
                            <Button variant="ghost" className="w-full justify-start">
                              <svg className="mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                                <circle cx="9" cy="7" r="4"/>
                                <path d="m22 21-3-3m0 0a2 2 0 1 0-2.828-2.828A2 2 0 0 0 19 18Z"/>
                              </svg>
                              Users
                            </Button>
                            <Button variant="ghost" className="w-full justify-start">
                              <svg className="mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                                <polyline points="14,2 14,8 20,8"/>
                                <line x1="16" x2="8" y1="13" y2="13"/>
                                <line x1="16" x2="8" y1="17" y2="17"/>
                                <polyline points="10,9 9,9 8,9"/>
                              </svg>
                              Documents
                            </Button>
                            <Button variant="ghost" className="w-full justify-start">
                              <svg className="mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                              </svg>
                              Settings
                            </Button>
                          </nav>
                        </div>
                      </div>
                      
                      {/* Main Content */}
                      <div className="flex-1 p-4">
                        <div className="space-y-4">
                          <h3 className="text-lg font-semibold">Main Content</h3>
                          <p className="text-muted-foreground">
                            This is the main content area. The sidebar can be toggled to show\/hide navigation.
                          </p>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="p-4 border rounded-lg">
                              <h4 className="font-medium">Card 1</h4>
                              <p className="text-sm text-muted-foreground">Some content here</p>
                            </div>
                            <div className="p-4 border rounded-lg">
                              <h4 className="font-medium">Card 2</h4>
                              <p className="text-sm text-muted-foreground">More content here</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-sm text-muted-foreground">
                    Sidebar is {sidebarOpen ? "open" : "closed"}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Typography Component */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span>Typography</span>
                  <Badge variant="secondary">Text</Badge>
                </CardTitle>
                <CardDescription>
                  Text styling and typography examples
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {/* Headings */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium">Headings</h4>
                    <div className="space-y-1">
                      <h1 className="text-4xl font-bold">Heading 1</h1>
                      <h2 className="text-3xl font-semibold">Heading 2</h2>
                      <h3 className="text-2xl font-semibold">Heading 3</h3>
                      <h4 className="text-xl font-semibold">Heading 4</h4>
                      <h5 className="text-lg font-semibold">Heading 5</h5>
                      <h6 className="text-base font-semibold">Heading 6</h6>
                    </div>
                  </div>
                  
                  {/* Body Text */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium">Body Text</h4>
                    <div className="space-y-2">
                      <p className="text-lg">Large paragraph text for important content.</p>
                      <p className="text-base">Regular paragraph text for normal content.</p>
                      <p className="text-sm">Small paragraph text for secondary content.</p>
                      <p className="text-xs">Extra small text for captions and labels.</p>
                    </div>
                  </div>
                  
                  {/* Text Styles */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium">Text Styles</h4>
                    <div className="space-y-1">
                      <p className="font-bold">Bold text for emphasis</p>
                      <p className="font-semibold">Semibold text for subheadings</p>
                      <p className="font-medium">Medium text for labels</p>
                      <p className="font-normal">Normal text for body content</p>
                      <p className="font-light">Light text for subtle content</p>
                      <p className="italic">Italic text for emphasis</p>
                      <p className="underline">Underlined text for links</p>
                      <p className="line-through">Strikethrough text for deleted content</p>
                    </div>
                  </div>
                  
                  {/* Colors */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium">Text Colors</h4>
                    <div className="space-y-1">
                      <p className="text-foreground">Default foreground color</p>
                      <p className="text-muted-foreground">Muted foreground color</p>
                      <p className="text-primary">Primary color</p>
                      <p className="text-secondary">Secondary color</p>
                      <p className="text-destructive">Destructive color</p>
                      <p className="text-blue-600">Custom blue color</p>
                      <p className="text-green-600">Custom green color</p>
                    </div>
                  </div>
                  
                  {/* Code */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium">Code</h4>
                    <div className="space-y-2">
                      <p className="text-sm">
                        Inline <code className="bg-muted px-1 py-0.5 rounded text-sm font-mono">code</code> example
                      </p>
                      <pre className="bg-muted p-3 rounded-md text-sm font-mono overflow-x-auto">
                        <code>{`function hello() {
  console.log("Hello, World!");
}`}</code>
                      </pre>
                    </div>
                  </div>
                  
                  {/* Lists */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium">Lists</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm font-medium mb-1">Unordered List</p>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          <li>First item</li>
                          <li>Second item</li>
                          <li>Third item</li>
                        </ul>
                      </div>
                      <div>
                        <p className="text-sm font-medium mb-1">Ordered List</p>
                        <ol className="list-decimal list-inside space-y-1 text-sm">
                          <li>First step</li>
                          <li>Second step</li>
                          <li>Third step</li>
                        </ol>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Footer */}
          <footer className="mt-16 text-center text-slate-600 dark:text-slate-400">
            <p>Built with ❤️ using Next.js, TypeScript, Tailwind CSS, and shadcn/ui</p>
            <p className="mt-2 text-sm">
              Explore more components at{" "}
              <a 
                href="https://ui.shadcn.com/docs/components" 
          target="_blank"
          rel="noopener noreferrer"
                className="underline hover:text-slate-900 dark:hover:text-slate-100"
              >
                ui.shadcn.com
              </a>
            </p>
            <div className="mt-4">
              <p className="text-sm text-muted-foreground">
                Tất cả 50+ components từ shadcn/ui đã được showcase trên trang này
              </p>
            </div>
      </footer>
    </div>
      </div>
      <Toaster />
    </TooltipProvider>
  );
}
