# Migration `20210130005949-create-spac`

This migration has been generated by Morgan Spencer at 1/29/2021, 7:59:49 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "Spac" (
    "id" TEXT NOT NULL,
    "symbol" TEXT NOT NULL,
    "ipoSymbol" TEXT NOT NULL,
    "ipoDate" DATETIME NOT NULL,
    "ipoPrice" TEXT,
    "mergerDate" DATETIME,
    PRIMARY KEY ("id")
)

CREATE UNIQUE INDEX "Spac.symbol_unique" ON "Spac"("symbol")
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration ..20210130005949-create-spac
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,18 @@
+datasource DS {
+  provider = ["sqlite", "postgresql"]
+  url = "***"
+}
+
+generator client {
+  provider      = "prisma-client-js"
+  binaryTargets = "native"
+}
+
+model Spac {
+  id          String    @id @default(cuid())
+  symbol      String    @unique
+  ipoSymbol   String
+  ipoDate     DateTime
+  ipoPrice    String?
+  mergerDate  DateTime?
+}
```


