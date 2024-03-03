import React from "react";
import {
  BaseKey,
  IResourceComponentsProps,
  useNavigation,
  useTranslate,
  useUpdateMany,
} from "@refinedev/core";

import Check from "@mui/icons-material/Check";
import Clear from "@mui/icons-material/Clear";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import { DataGrid, GridActionsCellItem, GridColDef } from "@mui/x-data-grid";
import { List, useDataGrid } from "@refinedev/mui";

import { IStatistica } from "../../interfaces";

export const ReviewsList: React.FC<IResourceComponentsProps> = () => {
  const [selectedRowKeys, setSelectedRowKeys] = React.useState<React.Key[]>([]);
  const hasSelected = selectedRowKeys.length > 0;

  const t = useTranslate();
  const { show } = useNavigation();

  const { mutate } = useUpdateMany<IStatistica>();

  const { dataGridProps } = useDataGrid<IStatistica>({
    initialPageSize: 10,

  });

  const handleUpdate = (id: BaseKey, status: IStatistica["status"]) => {
    mutate({
      resource: "reviews",
      ids: [id],
      values: { status },
      mutationMode: "undoable",
    });
  };

  const updateSelectedItems = (status: "approved" | "rejected") => {
    mutate(
      {
        resource: "reviews",
        ids: selectedRowKeys.map(String),
        values: {
          status,
        },
        mutationMode: "undoable",
      },
      {
        onSuccess: () => {
          setSelectedRowKeys([]);
        },
      },
    );
  };

  const columns = React.useMemo<GridColDef<IStatistica>[]>(
    () => [

      {
        field: "user",
        headerName: t("reviews.fields.user"),
        valueGetter: ({ row }) => row.user.fullname,
        minWidth: 100,
        flex: 1,
        sortable: false,
      },
      {
        field: "id",
        headerName: t("reviews.fields.orderId"),
        renderCell: function render({ row }) {
          return (
            <Button
              onClick={() => {
                show("orders", row.id);
              }}
              variant="text"
            >
              #{row.id}
            </Button>
          );
        },
        minWidth: 100,
        flex: 0.5,
      },
      {
        field: "status",
        headerName: t("Status"),
        renderCell: function render({ row }) {
          return (
            <Tooltip title={row.status}>
              <Typography
                variant="body2"
                sx={{
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                }}
              >
                {row.status}
              </Typography>
            </Tooltip>
          );
        },
        minWidth: 200,
        flex: 1,
      },
      {
        field: "username",
        headerName: t("Username"),
        renderCell: function render({ row }) {
          return (
            <Tooltip title={row.user.username}>
              <Typography
                variant="body2"
                sx={{
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                }}
              >
                {row.user.username}
              </Typography>
            </Tooltip>
          );
        },
        minWidth: 200,
        flex: 1,
      },
      {
        field: "address",
        headerName: t("Address"),
        renderCell: function render({ row }) {
          return (
            <Tooltip title={row.address}>
              <Typography
                variant="body2"
                sx={{
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                }}
              >
                {row.address}
              </Typography>
            </Tooltip>
          );
        },
        minWidth: 200,
        flex: 1,
      },
      {
        field: "price",
        headerName: t("Price"),
        renderCell: function render({ row }) {
          return (
            <Tooltip title={row.price}>
              <Typography
                variant="body2"
                sx={{
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                }}
              >
                {row.price}
              </Typography>
            </Tooltip>
          );
        },
        minWidth: 200,
        flex: 1,
      },
      {
        field: "payment",
        headerName: t("Payment"),
        renderCell: function render({ row }) {
          return (
            <Tooltip title={row.payment}>
              <Typography
                variant="body2"
                sx={{
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                }}
              >
                {row.payment}
              </Typography>
            </Tooltip>
          );
        },
        minWidth: 200,
        flex: 1,
      },
      {
        field: "note",
        headerName: t("Note"),
        renderCell: function render({ row }) {
          return (
            <Tooltip title={row.note}>
              <Typography
                variant="body2"
                sx={{
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                }}
              >
                {row.note}
              </Typography>
            </Tooltip>
          );
        },
        minWidth: 200,
        flex: 1,
      },
      {
        field: "quantity",
        headerName: t("Quantity"),
        renderCell: function render({ row }) {
          return (
            <Tooltip title={row.quantity}>
              <Typography
                variant="body2"
                sx={{
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                }}
              >
                {row.quantity}
              </Typography>
            </Tooltip>
          );
        },
        minWidth: 200,
        flex: 1,
      },
      {
        field: "date",
        headerName: t("Date"),
        renderCell: function render({ row }) {
          return (
            <Tooltip title={row.date}>
              <Typography
                variant="body2"
                sx={{
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                }}
              >
                {row.date}
              </Typography>
            </Tooltip>
          );
        },
        minWidth: 200,
        flex: 1,
      },

      {
        field: "actions",
        headerName: t("table.actions"),
        type: "actions",
        getActions: ({ row }) => [
          <GridActionsCellItem
            key={1}
            label={t("buttons.accept")}
            icon={<Check color="success" />}
            onClick={() => handleUpdate(row.id, "approved")}
            showInMenu
          />,
          <GridActionsCellItem
            key={2}
            label={t("buttons.reject")}
            icon={<Clear color="error" />}
            onClick={() => handleUpdate(row.id, "rejected")}
            showInMenu
          />,
        ],
      },
    ],
    [t],
  );

  return (
    <List
      wrapperProps={{ sx: { paddingX: { xs: 2, md: 0 } } }}
      headerProps={{
        subheader: hasSelected && (
          <Stack direction="row">
            <Button
              startIcon={<Check color="success" />}
              onClick={() => updateSelectedItems("approved")}
            >
              {t("buttons.acceptAll")}
            </Button>
            <Button
              startIcon={<Clear color="error" />}
              onClick={() => updateSelectedItems("rejected")}
            >
              {t("buttons.rejectAll")}
            </Button>
          </Stack>
        ),
      }}
    >
      <DataGrid
        {...dataGridProps}
        columns={columns}
        autoHeight
        density="comfortable"
        onRowSelectionModelChange={(newSelectionModel) => {
          setSelectedRowKeys(newSelectionModel as React.Key[]);
        }}
        pageSizeOptions={[10, 20, 50, 100]}
        rowSelectionModel={selectedRowKeys}
      />
    </List>
  );
};
