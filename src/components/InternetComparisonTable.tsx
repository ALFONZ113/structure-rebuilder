
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface ComparisonData {
  provider: string;
  maxSpeed: string;
  priceFrom: string;
  technology: string;
  benefits: string;
}

interface InternetComparisonTableProps {
  data: ComparisonData[];
  caption?: string;
}

const InternetComparisonTable = ({ data, caption }: InternetComparisonTableProps) => {
  return (
    <div className="overflow-x-auto w-full">
      <Table>
        {caption && <TableCaption>{caption}</TableCaption>}
        <TableHeader>
          <TableRow>
            <TableHead>Poskytovatel</TableHead>
            <TableHead>Maximální rychlost</TableHead>
            <TableHead>Cena od</TableHead>
            <TableHead>Technologie</TableHead>
            <TableHead>Největší výhody</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((item, index) => (
            <TableRow key={index} className={item.provider.includes("PODA") ? "bg-primary/10 dark:bg-primary/20" : ""}>
              <TableCell className="font-medium text-foreground">{item.provider}</TableCell>
              <TableCell className="text-body">{item.maxSpeed}</TableCell>
              <TableCell className="text-body">{item.priceFrom}</TableCell>
              <TableCell className="text-body">{item.technology}</TableCell>
              <TableCell className="text-body">{item.benefits}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default InternetComparisonTable;
